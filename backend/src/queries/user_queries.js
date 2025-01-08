
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


async function createUser(email, display_name, username, password)
{

    await prisma.users.create({
        data: {
            email: email,
            display_name: display_name,
            username: username,
            password: password
        }
    })

}


async function get_user(username) {
    const user = await prisma.users.findFirst({
        where: {
            username: {
                equals: username,
                mode: "insensitive", // Ignore case
            },
        },
    });

    return user;
}

async function send_friend_request(senderId, recipientId) {
    try {
      const friendRequest = await prismaClient.userFriends.create({
        data: {
          userId: senderId,
          friendId: recipientId,
        },
      });
  
      console.log('Friend request sent:', friendRequest);
      return friendRequest;
    } catch (error) {
      console.error('Error sending friend request:', error);
    }
  }

module.exports = {createUser, get_user, send_friend_request}