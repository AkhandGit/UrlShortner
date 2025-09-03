const shortid = require('shortid');
const Url = require('../models/url');

async function handleGenerateNewShortUrl(req, res) {
    try {
        const body = req.body;

        if (!body.url) {
            return res.status(400).json({ error: "Url is required" });
        }

        const shortId = shortid();

        await Url.create({
            shortId,
            redirectURL: body.url,
            visitHistory: []
        });

        return res.status(201).json({ id: shortId });
    } catch (err) {
        console.error("Error generating short URL:", err);
        return res.status(500).json({ error: "Internal server error" });
    }
}

module.exports = {
    handleGenerateNewShortUrl,
};
