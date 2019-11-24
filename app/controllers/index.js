const bcrypt = require("bcryptjs");
const User = require("../models/User");
const  jwt = require("jsonwebtoken");
const dotenv = require('dotenv').config();



const login = (req,res,next) => {
    const {name, password} = req.body;
    User.findOne({name},(err, data) =>{
        if(err){
            next(err);
        }
        if (!data ){
            return res.status(404).json({
                message:"invalid, Registration is needed!"
            })
        }else {
            bcrypt.compare(password, data.password, (err,data) => {
                if (!data) {
                    return res.status(403).json({
                        message:"email/password denied"
                    })
                }else {
                    const token = jwt.sign({keyCode: data.keyCode},process.env.SECRET_TEXT,{expiresIn: '7h'})
                    return res.status(200).json({
                        message:"login accepted",
                        token
                    })
                }
            })
        }
    })
}


const getUser = (req,res,next) => {
    userPath.find((err, data) => {
        if (err) return next (err)
        res.status(200).json({
          message:"users return successfully",
          data
        })
       
      })
}

module.exports = {register,login, getUser}