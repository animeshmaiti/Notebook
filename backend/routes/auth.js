const express = require('express');
const User = require('../models/User');
const { validationResult, body } = require('express-validator');

const router = express.Router();

router.post('/createuser', [
    body('username', 'enter a valid username').isLength({ min: 3 }),
    body('email', 'enter a valid email').isEmail(),
    body('password', 'enter a valid password').isLength({ min: 5 })
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ error: "Sorry a user with this email already exist" });
        }
        user = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        })
        res.json(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("some error is occurred");
    }
});

module.exports = router;