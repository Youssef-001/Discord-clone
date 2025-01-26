const express = require('express');
const router = express.Router();
const authenticateToken = require('../middlewares/authenticateToken.js')
const multer = require('multer');
const storage = multer.memoryStorage();  // This will store files in memory as buffers
const upload = multer({ dest: 'uploads/' })

const serverController = require('../controllers/serverController.js')
const channelController = require('../controllers/channelController.js')
const messageController = require('../controllers/messageController.js')
const authenticateServerOwner = require('../middlewares/authenticateServerOwner.js')


router.post('/create',upload.single('avatar') ,authenticateToken,(req,res) => {
    serverController.createServer(req,res);
})

router.post('/:serverId/channel', authenticateToken, authenticateServerOwner, (req,res) => {

    channelController.createChannel(req,res);

})

router.post('/:serverId/channel/:channelId/message', authenticateToken, (req,res) => {
    messageController.createMessage(req,res);
})

router.get('/:serverId/channel/:channelId/messages', authenticateToken, (req,res) => {
    messageController.getMessages(req,res);
})

router.post('/:serverId/join', authenticateToken, (req,res) => {

    serverController.joinServer(req,res);

})

router.get('/user', authenticateToken, (req,res) => {
    serverController.getUserServers(req,res);
})

router.get('/', (req,res) => {
    serverController.getAllServers(req,res);
})


router.get('/:serverId',(req,res) => {
    serverController.getServer(req,res);
})


module.exports = router;