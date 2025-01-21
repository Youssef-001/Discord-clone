const { join } = require('@prisma/client/runtime/library');
const server_queries = require('../queries/server_queries')

async function createServer(req,res)
{
    const avatar = req.file;
    const server = await server_queries.createServer(req.body.name, avatar.filename, req.user.id);
    console.log(server);

    let joinServerRequest = await fetch(`http://localhost:5000/server/${server.id}/join`,  {method:'POST',headers: {Authorization: `Bearer ${req.body.token}`}})

    res.json(server);
}

async function joinServer(req,res)
{
    const serverId = req.params.serverId;
    const userId = req.user.id;

    let updatedServer = await server_queries.joinServer(userId,serverId);
    res.json(updatedServer)
}

async function getUserServers(req,res)
{
    let servers = await server_queries.getUserServers(req.user.id);
    res.json({servers});
}


module.exports = {createServer,joinServer,getUserServers}