const express = require('express');
const router = express.Router();

const DmController = require('../controllers/DmController.js')



router.get('/', (req,res) => {

    DmController.getDms(req,res);

})


router.post('/', (req,res) => {
    DmController.sendDm(req,res);
})


module.exports = router;