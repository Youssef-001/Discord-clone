const express = require('express')
const router = express.Router();
const userController = require('../controllers/userController');



router.post('/', (req,res,next) => {
    userController.createUser(req,res,next);
})

module.exports = router;