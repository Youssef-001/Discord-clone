const dm_queries = require('../queries/dm_queries.js')

async function getDms(req, res) {
    const { user1, user2 } = req.params;

    // Validate input
    if (!user1 || !user2) {
        return res.status(400).json({ error: 'Missing user1 or user2 in request parameters' });
    }

    try {
        // Fetch messages
        const messages = await dm_queries.get_dms(user1, user2);
        res.json(messages);
    } catch (err) {
        console.error('Error fetching DMs:', err);

        // Handle database or other errors
        res.status(500).json({ error: 'Failed to fetch DMs' });
    }
}

async function sendDm(req,res)
{
    const sender = req.params.user1;
    const receiver = req.params.user2;
    const messageText = req.body.message;


    try{
    let message = await dm_queries.send_dm(sender,receiver,messageText);
    res.json(message);

    }
    catch(err)
    {
        console.error(err);

    }
}




module.exports = {getDms,sendDm}