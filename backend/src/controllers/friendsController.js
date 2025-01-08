const friends_queries = require('../queries/friends_queries');


async function addFriend(req,res,next) 
{

let sender = req.params.userId;
let receiver = req.params.receiverId;

let request = await friends_queries.send_friend_request(sender,receiver);
console.log(request);
next();


}


async function acceptRequest(req,res) 
{
    let sender = req.params.userId;
    let friend = req.params.friendId;

    let request = await friends_queries.accept_friend_request(sender,friend);

    console.log(request)
}

module.exports = {addFriend,acceptRequest}