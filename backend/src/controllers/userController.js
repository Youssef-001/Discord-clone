
const bcrypt = require("bcryptjs");
const user_queries = require('../queries/user_queries');

async function createUser(req,res,next)
{

    try {
        bcrypt.hash(req.body.password, 10, async(err,hashedPassword) => {
            if (err) return next(err);
            else {
               let user =  await user_queries.createUser(req.body.email, req.body.display_name,req.body.username, hashedPassword);

                res.status(200).json(user);
            }
        })
    } catch(err)
    {
        return next(err);
    }

}

module.exports = {createUser,}