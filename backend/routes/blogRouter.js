const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest:'../assets/' });
const cut = require('../utilities/cut');
const Blog = require('../models/blog');

router.post('/addsimpleblog', upload.none(), async (req,res,next) => {
	try{
		let input = cut(req.body, ['userid','label','title','body']);
		let simpleBlog = new Blog(input);
		await simpleBlog.save();
		res.status(200).json({});
	} catch(err){ next(err); }
});

router.post('/addimg', upload.single('picture'), async (req,res,next) => {
	try{
		let img = cut(req.body, ['image']);
		let encode_image = img.toString('base64');
		await encode_image.save();
		res.status(200).json({});
	} catch(err){ next(err); }
})

module.exports = router;