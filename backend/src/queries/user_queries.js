
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


module.exports = {createUser}