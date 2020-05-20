var express = require('express');
var router = express.Router();

const db = require('../db')


router.post('/api/register', async (req, res, next) => {
  
    console.log('search key: ', req.params.recipe_key)

    console.log('this is the body of the request: ', req.body)

    try{
        let usersData = await db.users.create(req.body.email_address, req.body.password, req.body.username)
        res.status(200).send('User Created');
    }catch(error){
        res.status(500).send('error: unable to create user')
    }
    
});


router.post('/api/login', async (req, res, next) => {
  
  console.log('this is the body of the request: ', req.body)
  
  try{
      let usersData = await db.users.login(req.body.username, req.body.password)
      res.status(200).send('Login Successful');
  }catch(error){
      res.status(500).send('error: Login Failed')
  }
  
});






module.exports = router;
