const express = require('express');
const router = express.Router();
const authenticateToken = require('../middlewares/authenticateToken.js')

const serverController = require('../controllers/serverController.js')
const channelController = require('../controllers/channelController.js')
const messageController = require('../controllers/messageController.js')


router.post('/create', authenticateToken,(req,res) => {
    serverController.createServer(req,res)
})

router.post('/:serverId/channel', authenticateToken, (req,res) => {

    channelController.createChannel(req,res);

})

router.post('/:serverId/channel/:channelId/message', authenticateToken, (req,res) => {
    messageController.createMessage(req,res);
})

module.exports = router;