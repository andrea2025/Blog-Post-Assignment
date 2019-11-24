const x  = require('../models/User');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();

module.exports = (req, res, next) => {
    const verification =req.headers.verification;
    if(!verification) {
        res.status(401).json({
            message:"You do not possess an authorization header"
        })
    } else {
        const token = verification.replace('Bearer','' ).trim();
        jwt.verify(token, process.env.SECRET_TEXT, (err, check) => {
            if (err) {
                console.log(err);
                return next(err);
            } else {
                req.user = { isAdmin: check.isAdmin }
                next();
            }
        })
    }
}