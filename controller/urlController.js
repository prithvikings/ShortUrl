const {nanoid} = require('nanoid');
const Url = require('../models/url');
async function handleGenerateShortUrl(req, res) {
    const body = req.body;
    const shortId = nanoid(5);

    console.log(body);
    if (!body.url) {
        return res.status(400).json({
            message: 'redirectUrl is required'
        });
    }
    
    await Url.create({
        shortId,
        redirectUrl: body.url,
        visitHistory: []
    });
    return res.json({
       id: shortId
    });
}


module.exports = {
    handleGenerateShortUrl
    };