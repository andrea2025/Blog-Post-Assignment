var express = require('express');
var router = express.Router();
const register = require('../controllers/index');
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const x = require('../models/User');
const bcryptjs = require('bcryptjs');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/register', function (req, res, next) {
  console.log('register');
  const { name, email, password, isAdmin } = req.body;


  x.findOne({ email, }, (err, data) => {
    if (data) {
      return res.status(400).json({
        message: 'User has been registered already'
      })
    } else {
      bcryptjs.genSalt(10, function (err, salt) {
        bcryptjs.hash(password, salt, function (err, hash) {
        // })
        // bcrypt.hash(password, salt, (err, hash) => {
        const newUser = new x({
          name,
          password: hash,
          email
        })
        newUser.save((err) => {
          if (err) {
            return next(err);
          } else {
            return res.status(201).json({
              message: 'User created successfully'
            })
          }
        })
      })
      })
    }
  });
})
module.exports = router;
