const express = require('express');
const User = require('../models/User');
const { validationResult, body } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser');
const router = express.Router();

const JWT_SECRET = '#3l0#0@r3y0u'

//=============== Create user /api/auth/createuser (Login not required) ==============
router.post('/createuser', [
    body('username', 'enter a valid username').isLength({ min: 3 }),
    body('email', 'enter a valid email').isEmail(),
    body('password', 'enter a valid password').isLength({ min: 5 })
], async (req, res) => {
    // const expire_time = Math.floor(Date.now() / 1000) + 60;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ error: "Sorry a user with this email already exist" });
        }
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);
        user = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: secPass,
        })
        const data = {
            user: {
                id: user.id
            }
        }
        // const authToken = jwt.sign({ data, exp: expire_time }, JWT_SECRET);
        const authToken = jwt.sign(data, JWT_SECRET);

        res.json({ authToken });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("internal server error");
    }
});

// ============= login user /api/auth/login (Login not required) ===============
router.post('/login', [
    body('email', 'enter a valid email').isEmail(),
    body('password', 'password cannot be blank').exists(),
], async (req, res) => {
    let success = false;
    // const expire_time = Math.floor(Date.now() / 1000) + 60;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) {
            success = false;
            return res.status(400).json({ success, errors: "pls login with correct credentials" });
        }
        const compPass = await bcrypt.compare(password, user.password);
        if (!compPass) {
            success = false;
            return res.status(400).json({ success, errors: "pls login with correct credentials" });
        }
        const data = {
            user: {
                id: user.id
            }
        }
        // const authToken = jwt.sign({ data, exp: expire_time }, JWT_SECRET)
        const authToken = jwt.sign(data, JWT_SECRET)
        success=true
        res.json({success,authToken });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("internal server error");
    }
});

//============ get logged in user details (Login required) ==============
router.post('/getuser', fetchuser, async (req, res) => {
    try {
        const userId = req.user.id;
        const user = await User.findById(userId).select("-password");
        res.send(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("internal server error");
    }
});

module.exports = router;