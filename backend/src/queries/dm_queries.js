
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();



async function get_dms(user1,user2)
{
    let messages = await prisma.dMS.findMany({
        where: {

            OR: [
                {
                    senderId: user1,
                    receiver: user2
                },
                {
                    senderId: user2,
                    receiver: user1
                }
            ]
            
        },
        orderBy: {
            createdAt: 'asc', // Optional: Order messages by creation time
        },
    })

    return messages;
}

async function send_dm(sender,receiver,messageText)
{
    let message = await prisma.messages.create({
        data: {
            senderId: sender,
            receiverId: receiver,
            message: messageText

        }
    })
}

module.exports = {get_dms,send_dm};