const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const checkAuth = require('../middleware/check-auth');

const User = require('../models/user')
const UserController = require('../controller/users');




router.post('/signup',UserController.users_signup );


router.post('/login',UserController.users_login);


router.delete('/:userId',checkAuth,UserController.users_delete);

router.post('/verify', function(req, res){
    var token = req.body.token;
    jwt.verify(token, process.env.JWT_KEY, (err, verifiedJwt) => {
        if(err){
          res.status(404).json(err.message)
        }else{
          res.status(200).json(verifiedJwt)
        }
      });
});

router.post('/details', function(req, res){
  var email = req.body.email;
  User.findOne({email:email}, function(err,found){
    if(err)
      res.status(400).send(err);
    else if(found)
    {
      res.status(200).send(found);
    }
    else
    {
      res.status(404).send("Not found");
    }
  });
});

router.get('/activate/user/:reference', async (req, res) => {
  var id = req.params.reference;
  await User.findOne({_id:id}, async(err,found) => {
    if(err)
      res.status(400).send(err);
    else if(found)
    {
      if(found.activate == false)
      {
        found.activate = true;
        found.save();
        return res.status(200).send("Account Activated. Redirecting...");
      }
      else
      {
        return res.status(400).send("This account has already been activated");
      }
    }
    else
    {
      res.status(404).send("User not registered.");
    }
  });
});

router.post('/jwt/google', async(req, res) => {
  var email = req.body.email;
  var name = req.body.name;
  const token = await jwt.sign({
    email: email,
    name: name					
  }, 
  process.env.JWT_KEY,
  {
    expiresIn: '1h'
  }
);

return res.json({
  "token":token
});

});

module.exports = router;