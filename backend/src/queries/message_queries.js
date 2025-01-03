
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

module.exports = {createMessage}