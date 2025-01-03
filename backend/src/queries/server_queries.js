
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();



async function createServer(name, ownerId)
{
    let server = await prisma.servers.create({
        data: {
            name:name,
            ownerId: ownerId
        }
    })

    return server;
}


module.exports = {createServer,}