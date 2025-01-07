const { join } = require('@prisma/client/runtime/library');
const server_queries = require('../queries/server_queries')

async function createServer(req,res)
{
    const server = await server_queries.createServer(req.body.name, req.user.id);
    console.log(server);
    res.json(server);
}

async function joinServer(req,res)
{
    const serverId = req.params.serverId;
    const userId = req.user.id;

    let updatedServer = await server_queries.joinServer(userId,serverId);
    console.log(updatedServer)
}

async function getUserServers(req,res)
{
    let servers = await server_queries.getUserServers(req.user.id);
    res.json({servers});
}


module.exports = {createServer,joinServer,getUserServers}