const express = require('express');
const router = express.Router();
const cookieParser = require("cookie-parser")

const User = require('../models/User');
const Post = require('../models/Post');
const {homeFeed,userFeed,getPost, addPost} = require('../controllers/common.js')

router.use(cookieParser());

router.post('/home', homeFeed);
router.post('/user', userFeed);
router.post('/user/:id', userFeed);
router.post('/post/:id', getPost);
router.post('/post', addPost);

module.exports = router;