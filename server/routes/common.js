const express = require('express');
const router = express.Router();
const cookieParser = require("cookie-parser")

const User = require('../models/User');
const Post = require('../models/Post');
const {homeFeed,userFeed} = require('../controllers/common.js')

router.use(cookieParser());

router.get('/home', homeFeed);
router.get('/user', userFeed);
router.get('/user/:id', userFeed);

module.exports = router;