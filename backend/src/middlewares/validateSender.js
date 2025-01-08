function validateSender(req, res, next) {
    const sender = req.params.userId;
    const user = req.user?.id;

    if (!user || sender !== user) {
        return res.status(403).json({ error: "Unauthorized: Invalid user identity" });
    }

    next();
}

module.exports = validateSender;
