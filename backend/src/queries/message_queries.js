
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();



async function createMessage(messageText,userId,channelId)
{
    let message = prisma.messages.create({
        data: {
            message: messageText,
            userId: userId,
            channelId: channelId


        },include: {
            user: true, // Include the user relation
        },
    })

    return message;
}

async function getMessages(channelId)
{
    let messages = await prisma.messages.findMany({
        where: {
            channelId: channelId
        },include: {
            user: true, // Include the user relation
          },
    })
    console.log(messages);
    return messages
}

module.exports = {createMessage,getMessages}