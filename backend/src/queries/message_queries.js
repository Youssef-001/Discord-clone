
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();



async function createMessage(messageText,userId,channelId)
{
    let message = prisma.messages.create({
        data: {
            message: messageText,
            userId: userId,
            channelId: channelId


        }
    })

    return message;
}

async function getMessages(channelId)
{
    let messages = prisma.messages.findMany({
        where: {
            channelId: channelId
        },include: {
            user: true, // Include the user relation
          },
    })

    return messages
}

module.exports = {createMessage,getMessages}