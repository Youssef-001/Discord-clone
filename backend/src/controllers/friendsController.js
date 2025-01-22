const friends_queries = require('../queries/friends_queries');


async function addFriend(req,res,next) 
{

let sender = req.user.id;
let receiver = req.params.receiverId;

let request = await friends_queries.send_friend_request(sender,receiver);
console.log(request);
next();


}


async function acceptRequest(req,res) 
{
    let receiver = req.user.id;
    let sender = req.params.friendId;

    let request = await friends_queries.accept_friend_request(sender,receiver);

    console.log(request)
}

async function getFriends(req,res)
{
    let userId = req.user.id;
    let friends = await friends_queries.get_friends(userId)
    res.json({friends})

}


async function getUserPendingRequests(req,res)
{
    let userId = req.user.id;
    let pending_requests = await friends_queries.get_pending_friend_requests(userId);
    res.json(pending_requests);
}


async function getRequests(req,res)
{
    let userId = req.user.id;

    let requests = await friends_queries.get_requests();

    res.json(requests);
}

module.exports = {addFriend,acceptRequest, getFriends,getUserPendingRequests,getRequests}