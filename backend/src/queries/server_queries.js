
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();



async function createServer(name, avatar, ownerId)
{
    let server = await prisma.servers.create({
        data: {
            name:name,
            avatar: avatar,
            ownerId: ownerId
        },
        include: {
          channels: true, // Include channels in the returned object
      },
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


async function getUserServers(userId) {
    try {
      let servers = await prisma.users.findUnique({
        where: { id: userId },
        select: {
          memberOf: {
            select: {
              id: true,
              name: true,
              avatar: true,
              ownerId: true,
              channels: { // Include channels
                select: {
                  id: true,
                  name: true,
                },
              },
            },
          },
        },
      });
  
      console.log(servers.memberOf);  // This will print the array of servers the user is a member of
      return servers.memberOf;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to retrieve user servers');
    }
  }



async function get_all_servers()
{


  try {
    let servers = await prisma.servers.findMany();
    return servers;
  }
  catch(error)

  {
    console.error(error);
    throw new Error('Failed to fetch all servers');
  }

}

module.exports = {createServer,joinServer,getUserServers,get_all_servers}