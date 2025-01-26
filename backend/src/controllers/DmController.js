const dm_queries = require('../queries/dm_queries.js')

async function getDms(req,res)
{

    let user1 = req.user.username;
    let user2 = req.params.username;

    let messages = await dm_queries.get_dms(user1,user2);

    return messages;

}


async function sendDm(req,res)
{
    const sender = req.user.username;
    const receiver = req.params.username;
    const messageText = req.body.message;


    let message = await dm_queries.send_dm(sender,receiver,messageText);
    return message;
}




module.exports = {getDms}