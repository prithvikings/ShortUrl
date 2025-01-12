const express = require('express');
const router = express.Router();
const {handleGenerateShortUrl}=require('../controller/urlController')
router.post('/', handleGenerateShortUrl);
module.exports=router;

