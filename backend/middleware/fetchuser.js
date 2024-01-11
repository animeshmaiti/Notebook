const jwt = require('jsonwebtoken');
const JWT_SECRET = '#3l0#0@r3y0u';

const fetchuser = (req, res, next) => {
    // get the user from the jwt token and add it to req object
    const token = req.header('auth-token');
    if (!token) {
        return res.status(401).send({ error: "please authenticate with valid token" });
    }
    try {
        const decoded = jwt.verify(token, JWT_SECRET)
        // req.user = decoded.data.user;
        req.user = decoded.user;
        next();
    } catch (error) {
        console.error(error.message);
        res.status(401).send({ error: "please authenticate with valid token" });
    }

}

module.exports = fetchuser;