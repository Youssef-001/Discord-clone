const express = require('express')
const router = express.Router();
const userController = require('../controllers/userController');
const validateUser = require('../middlewares/validateUser');
const { body, validationResult } = require("express-validator");
const user_queries = require('../queries/user_queries')

router.post('/',  validateUser,(req,res,next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });

      }

    userController.createUser(req,res,next);


})

router.post('/checkUsername', async(req,res,next) => {

  const username = req.query.username;

  const user = await user_queries.get_user(username);

  if (!user)
  {
    return res.status(400).json({error: 'username unavaliable', isUnique:false});
  }
  else {
    return res.status(200).json({success: 'username avaliable', isUnique:true});
  }



})

module.exports = router;