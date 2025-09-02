const {nanoid} = require('nanoid');
const Url = require('../models/url');

async function handleGenerateNewShortUrl(params) {
    const body = req.body;
    if(!body.url) return res.status(400).json({error:"Url is required"});
    const shortId = nanoid(8);
    await Url.create({
        shortId,
        redirectURL:body.url,
        visitHistory:[]
    });
    return res.status(201).json({id:shortId});
}

module.exports = {
    handleGenerateNewShortUrl,
};