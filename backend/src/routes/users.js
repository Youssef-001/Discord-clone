const express = require('express')
const router = express.Router();

const user_queries = require('../queries/user_queries')

// Backend: Endpoint to get user ID by username
router.get('/:username/id', async (req, res) => {
    const { username } = req.params;

    try {
        const user = await user_queries.get_user(username);


        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json({ userId: user.id });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


module.exports = router;