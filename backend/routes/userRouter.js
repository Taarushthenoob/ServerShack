const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer();
const User = require('../models/user');
const cut = require('../utilities/cut');

router.post('/create', upload.none(), async (req,res) => {
	try{
		let newuser = cut(req.body, ['_id','email','fullname','image','org','upi','website']);
		let saved = new User(newuser);
		await saved.save();
		res.status(200).json({ ok:1 });
	} catch(err){ next(err); }
});

module.exports = router;