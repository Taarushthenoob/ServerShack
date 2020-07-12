const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest:'../assets/' });
const cut = require('../utilities/cut');
const Blog = require('../models/blog');

function mediaHandle(req,res,next) {
	try{
		upload.single('media');
	} catch(err){ next(); }
}


router.post('/addblog', mediaHandle, async (req,res,next) => {
	try{
		let input = cut(req.body, ['userid','label','title','body']);
		if(req.file) input.media = req.file.path;
		input.date = Date.now();
		let newBlog = new Blog(input);
		await newBlog.save();
		res.status(200).json({});
	} catch(err){ next(err); }
});


// router.post('/addblogvid', upload.single('video'), async (req,res,next) => {
// 	try{
// 		let input = cut(req.body, ['userid','label','title']);
// 		input.video = req.file.path;
// 		input.date = Date.now();
// 		let newBlog = new Blog(input);
// 		await newBlog.save();
// 		res.status(200).json({});
// 	} catch(err){ next(err); }
// });


router.post('/blogsbylabels', upload.none(), async (req,res,next) => {
	try{
		let { labels } = req.body;
		labels = labels.split(",");
		let blogs = await Blog.find({ label: { $in: labels }}).populate('userid');
		res.status(200).json({ ok:1, blogs });
	} catch(err){ next(err); }
});


router.get('/blogsbydate', async (req,res,next) => {
	try{
		let blogs = await Blog.find({},null,{ sort: { date: -1 }, limit: 20 });
		res.status(200).json({ ok:1, blogs });
	} catch(err){ next(err); }
});


module.exports = router;