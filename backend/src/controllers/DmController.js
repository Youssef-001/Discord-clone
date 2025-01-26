const dm_queries = require('../queries/dm_queries.js')

async function getDms(req,res)
{

    let user1 = req.params.user1;
    let user2 = req.params.user2;

    let messages = await dm_queries.get_dms(user1,user2);

    return messages;

}


async function sendDm(req,res)
{
    const sender = req.params.user1;
    const receiver = req.params.user2;
    const messageText = req.body.message;


    let message = await dm_queries.send_dm(sender,receiver,messageText);
    return message;
}




module.exports = {getDms}