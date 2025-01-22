const express = require('express')
const router = express.Router();

const friends_queries = require('../queries/friends_queries');
const friendsController = require('../controllers/friendsController');

const authenticateToken = require('../middlewares/authenticateToken')
const validateSender =  require('../middlewares/validateSender')

// get user friends
router.get('/friends', authenticateToken,(req,res) => {
    friendsController.getFriends(req,res);
})

router.get('/', authenticateToken, (req,res) => {
    friendsController.getRequests(req,res);
})

// get user pending requests
router.get("/friend-requests", authenticateToken, (req, res) => {
    if (req.query.status === "pending") {
      friendsController.getUserPendingRequests(req, res);
    } else {
      res.status(400).json({ error: "Invalid or missing 'status' query parameter" });
    }
  });


// add friend
router.post('/friend-requests/:receiverId', authenticateToken,(req,res,next) => {


friendsController.addFriend(req,res,next);

})


router.put('/friend-requests/:friendId',authenticateToken,validateSender,(req,res) => {


    friendsController.acceptRequest(req,res);

})


router.delete('/friend-requests/:friendId',authenticateToken, (req,res) => {

})

module.exports = router;