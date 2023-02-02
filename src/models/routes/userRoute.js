var  express =require('express');
var User =require('../models/userModel');
var bcrypt = require('bcryptjs');
var router=express.Router();
router.post('/register', async (req, res) => {
    bcrypt.hash(req.body.password,8, async(err,hash)=>{  
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: hash,
    });
    const newUser = await user.save();
    if (newUser) {
      res.send({
        _id: newUser.id,
        name: newUser.name,
        email: newUser.email
      });
    } else {
      res.status(401).send({ message: 'Invalid User Data.' });
    }
  
    })
  });
  module.exports=router; 