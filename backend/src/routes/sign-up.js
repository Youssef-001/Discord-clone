const express = require('express')
const router = express.Router();
const userController = require('../controllers/userController');
const validateUser = require('../middlewares/validateUser');
const { body, validationResult } = require("express-validator");


router.post('/',  validateUser,(req,res,next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });

      }

    userController.createUser(req,res,next);


})

module.exports = router;