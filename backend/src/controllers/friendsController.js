const friends_queries = require('../queries/friends_queries');


async function addFriend(req,res,next) 
{

let sender = req.user.userId;
let receiver = req.params.receiverId;

let request = await friends_queries.send_friend_request(sender,receiver);
console.log(request);
next();


}


async function acceptRequest(req,res) 
{
    let sender = req.user.userId;
    let friend = req.params.friendId;

    let request = await friends_queries.accept_friend_request(sender,friend);

    console.log(request)
}

async function getFriends(req,res)
{
    let userId = req.user.id;
    let friends = await friends_queries.get_friends(userId)
    res.json({friends})

}

module.exports = {addFriend,acceptRequest, getFriends}