
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();



async function get_dms(user1, user2) {
    let messages = await prisma.dMS.findMany({
        where: {
            OR: [
                {
                    senderId: user1,
                    receiverId: user2,
                },
                {
                    senderId: user2,
                    receiverId: user1,
                },
            ],
        },
        select: {
            id: true, // Include the message ID
            message: true, // Include the message text
            createdAt: true, // Include the creation timestamp
            sender: {
                select: {
                    id: true,
                    username: true,
                    display_name: true,
                    avatar: true,
                    status: true,
                },
            },
            receiver: {
                select: {
                    id: true,
                    username: true,
                    display_name: true,
                    avatar: true,
                    status: true,
                },
            },
        },
    
    });

    return messages;
}
async function send_dm(sender, receiver, messageText) {
    try {
        let message = await prisma.dMS.create({
            data: {
                senderId: sender,
                receiverId: receiver,
                message: messageText,
            },
            select: {
                id: true, // Include the message ID
                message: true, // Include the message text
                createdAt: true, // Include the creation timestamp
                sender: {
                    select: {
                        id: true,
                        username: true,
                        display_name: true,
                        avatar: true,
                        status: true,
                    },
                },
                receiver: {
                    select: {
                        id: true,
                        username: true,
                        display_name: true,
                        avatar: true,
                        status: true,
                    },
                },
            },
        });

        return message;
    } catch (err) {
        console.error('Error sending DM:', err);
        throw new Error('Failed to send DM');
    }
}

module.exports = {get_dms,send_dm};