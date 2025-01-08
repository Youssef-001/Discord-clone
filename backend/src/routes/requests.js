const express = require('express')
const router = express.Router();

const friends_queries = require('../queries/friends_queries');
const friendsController = require('../controllers/friendsController');

const authenticateToken = require('../middlewares/authenticateToken')
const validateSender =  require('../middlewares/validateSender')

// get user friends
router.get('/:userId/friends', authenticateToken,(req,res) => {
})

// get user pending requests
router.get('/:userId/friend-requests?status=pending', authenticateToken,(req,res) => {
})


// add friend
router.post('/:userId/friend-requests/:receiverId', authenticateToken,validateSender,(req,res,next) => {


friendsController.addFriend(req,res,next);

})


router.put('/:userId/friend-requests/:friendId',authenticateToken,(req,res) => {})


router.delete('/:userId/friend-requests/:friendId',authenticateToken, (req,res) => {

})

module.exports = router;