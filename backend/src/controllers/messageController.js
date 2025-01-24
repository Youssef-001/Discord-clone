const message_queries = require('../queries/message_queries')

async function createMessage(req,res)
{
    let messageText = req.body.message;
    let userId = req.user.id;
    let channelId = req.params.channelId;
    let serverId = req.params.serverId;

    let message = await message_queries.createMessage(messageText,userId,channelId);

    res.json(message);


}

async function getMessages(req,res)
{
    let channelId = req.params.channelId;
    let messages = await message_queries.getMessages(channelId);
    res.json(messages);
}

module.exports = {createMessage,getMessages}