const server_queries = require('../queries/server_queries')

async function createServer(req,res)
{
    const server = await server_queries.createServer(req.body.name, req.user.id);
    console.log(server);
    res.json(server);
}


module.exports = {createServer,}