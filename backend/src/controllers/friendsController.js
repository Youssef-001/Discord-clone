const friends_queries = require('../queries/friends_queries');


async function addFriend(req,res,next) 
{

let sender = req.params.userId;
let receiver = req.params.receiverId;

let request = await friends_queries.send_friend_request(sender,receiver);
console.log(request);
next();


}