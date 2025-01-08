const express = require('express')
const router = express.Router();

const friends_queries = require('../queries/friends_queries');
const friendsController = require('../controllers/friendsController');

// get user friends
router.get('/:userId/friends', (req,res) => {
})

// get user pending requests
router.get('/:userId/friend-requests?status=pending', (req,res) => {
})


// add friend
router.post('/:userId/friend-requests/:receiverId', (req,res,next) => {


friendsController.addFriend(req,res,next);

})


router.put('/:userId/friend-requests/:friendId',(req,res) => {})


router.delete('/:userId/friend-requests/:friendId', (req,res) => {

})
