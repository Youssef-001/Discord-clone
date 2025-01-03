
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


async function get_user(username)
{
    const user = await prisma.users.findUnique({
        where: {
            username:username
        }
    })

    return user;
}

module.exports = {createUser, get_user}