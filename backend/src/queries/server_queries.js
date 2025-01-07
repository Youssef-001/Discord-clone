
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


async function joinServer(userId, serverId) {
  try {
    // Check if user and server exist
    const userExists = await prisma.users.findUnique({
      where: { id: userId },
    });
    const serverExists = await prisma.servers.findUnique({
      where: { id: serverId },
    });

    if (!userExists || !serverExists) {
      throw new Error('User or Server not found');
    }

    // Add the user to the server
    const updatedServer = await prisma.servers.update({
      where: { id: serverId },
      data: {
        members: {
          connect: { id: userId }, // Connect the user to the server
        },
      },
    });

    console.log(`${userExists.display_name} has joined the server: ${updatedServer.name}`);
    return updatedServer;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to join server');
  }
}


async function getUserServers(userId)
{
    let servers = await prisma.servers.findMany({
        where: {userId: userId}
    })

    console.log(servers);
    return servers;
}

module.exports = {createServer,joinServer,getUserServers}