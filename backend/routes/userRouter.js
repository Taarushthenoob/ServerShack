const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer();
const User = require('../models/user');
const cut = require('../utilities/cut');

router.post('/create', upload.none(), async (req,res) => {
	try{
		let newuser = cut(req.body, ['_id','email','fullname','image','org']);
		let saved = new User(newuser);
		await saved.save();
		res.status(200).json({ ok:1 });
	} catch(err){ next(err); }
});

router.post('/addupiwebsite', upload.none(), async (req,res) => {
	try{
		let updates = cut(req.body, ['upi','website']);
		let { _id } = req.body;
		let { n, nModified } = await User.updateOne({ _id }, updates);
		if(n !== 1 || nModified !== 1){
			let err = new Error('Failed to update details');
			next(err);
			return;
		}
		res.status(200).json({ ok:1 });
	} catch(err){ next(err); }
});

router.get('/getqr', async (req,res) => {
	let { _id } = req.query;
	let user = await User.findOne({ _id });
	if(!user.org){
		let err = new Error('Not an org account');
		err.status = 403;
		next(err);
		return;
	}
	if(!user.upi){
		let err = new Error('Missing UPI id in DB');
		err.status = 404;
		next(err);
		return;
	}
	let d = await fetch(`https://upiqr.in/api/qr?name=${user.fullname}&vpa=${user.upi}`);
	d = await d.text();
	d = a.split('d="')[1].split('"')[0]
	res.status(200).json({ ok:1, d });
});

module.exports = router;