const channel_queries = require('../queries/channel_queries');

async function createChannel(req,res)
{
    let serverId = req.params.serverId;
    let channel = await channel_queries.createChannel(req.body.channel_name = 'general', serverId);

    res.json(channel);



}

module.exports = {createChannel}