const { join } = require('@prisma/client/runtime/library');
const server_queries = require('../queries/server_queries');
const channelController = require('../controllers/channelController')

async function createServer(req,res)
{
    const avatar = req.file;
    const server = await server_queries.createServer(req.body.name, avatar.filename, req.user.id);
    console.log(server);

    let joinServerRequest = await fetch(`http://localhost:5000/server/${server.id}/join`,  {method:'POST',headers: {Authorization: `Bearer ${req.body.token}`}})
    let channel = await fetch(`http://localhost:5000/server/${server.id}/channel`, {method:'POST', headers:{Authorization:`Bearer ${req.body.token}`}})
    let channelJson = await channel.json();
    console.log(server);
    console.log(channelJson);
    server.channels.push(channelJson);
    console.log(server);
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


async function getAllServers(req,res)
{
    let servers = await server_queries.get_all_servers();
    res.json(servers);
}


async function getServer(req,res)
{
    let server = await server_queries.get_server(req.params.serverId);
    res.json(server);
}

async function getServerUsers(req,res)
{
    try {
    const serverId = req.params.serverId;
    let serverUsers = await server_queries.get_server_users(serverId);
    res.json(serverUsers);
    }

    catch(err)
    {
        console.error(err);
        
    }
}


module.exports = {createServer,joinServer,getUserServers,getAllServers,getServer,getServerUsers}