const express = require('express');
const router = express.Router();

const DmController = require('../controllers/DmController.js')

// TODO Authentication


router.get('/:user1/:user2', (req,res) => {

    DmController.getDms(req,res);

})


router.post('/:user1/:user2', (req,res) => {
    DmController.sendDm(req,res);
})

router.delete('/:user1/:user2/messages/:messageId', (req,res) => {
    DmController.deleteMessage(req,res);
})

module.exports = router;