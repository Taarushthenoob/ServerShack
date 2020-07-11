const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest:'../assets/' });

//router.post('/addsimpleblog', upload.array('images'), (req,res));

module.exports = router;