
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function createChannel(name, serverId)
{

let channel = await prisma.channels.create({
    data: {
        name:name,
        serverId: serverId
    }
})

return channel;
}

module.exports = {createChannel}