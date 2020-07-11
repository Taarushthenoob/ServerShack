const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest:'../assets/' });
const cut = require('../utilities/cut');
const Blog = require('../models/blog');

router.post('/addsimpleblog', upload.none(), async (req,res,next) => {
	try{
		let input = cut(req.body, ['userid','label','title','body']);
	} catch(err){ next(err); }
});

module.exports = router;