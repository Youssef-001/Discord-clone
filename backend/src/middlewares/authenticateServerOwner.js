const server_queries = require('../queries/server_queries')
async function authenticateServerOwner(req,res,next)
{
        const serverId = req.params.serverId;

        const server = await server_queries.get_server(serverId);

        if (req.user.id != server.ownerId)
        {
            res.status(401).json({message: 'Unauthorized'})
        }
        else {
            next();
        }


        
}

module.exports=authenticateServerOwner