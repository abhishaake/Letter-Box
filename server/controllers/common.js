const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");

const Messages = Object.freeze({
    Unauthorized: 'User not loggedIn',
    Success: 'Success',
    UserNotFound: 'User does not exists',
    InvalidCredentials: 'Invalid Credentials',
    PostNotFound: 'Post not found',
    EmptyPost: 'Post content is empty'
})

const User = mongoose.model('User');
const Follower = mongoose.model('Follower');
const Post = mongoose.model('Post');

tokenVerification = (token) => {
    if (!token) {
      return null;
    }
    return jwt.verify(token, process.env.JWT_SECRET);
}

homeFeed = async (req, res, next) =>{
    // verify token
    const token = req.cookies.token;
    
    var decode = tokenVerification(token);
    if(!decode){
        res.status(401).json({code:200,msg:Messages.Unauthorized,data:{}});
        return;
    }

    var user = await User.findOne({_id:decode.id});
    if(!user){
        res.status(404).json({code:200,msg:Messages.UserNotFound,data:{}});
        return;
    }
    
    // get followees

    const followees = await Follower.find({follower: user._id});
    var posts = [];
    if(followees){
        for(let i in followees){
            // get posts
            posts = [...posts,await Post.find({from:followees[i].followee})];
        }
    }

    // get notifications
    // TODO

    res.status(200).json({
        code: 1006,
        msg: Messages.Success,
        data:{
            user,
            posts
        }
    })

}

userFeed = async (req, res, next) =>{
    // verify token
    const token = req.cookies.token;

    var decode = tokenVerification(token);
    if(!decode){
        res.status(401).json({code:200,msg:Messages.Unauthorized,data:{}});
        return;
    }

    var user = await User.findOne({_id:decode.id});
    if(!user){
        res.status(200).json({code:200,msg:Messages.UserNotFound,data:{}});
        return;
    }

    const paramId = req.params.id;
    if(paramId) {
        try{
            user = await User.findOne({_id:paramId});
        }
        catch(e){
            user = null;
        }
        
        if(!user) {
            res.status(200).json({
                code: 1007,
                msg: Messages.UserNotFound,
                data:{}
            });
            return;
        }
    }

    // get posts
    const posts = await Post.find({from:user._id})
    // get notifications
    // TODO

    res.status(200).json({
        code: 1008,
        msg: Messages.Success,
        data:{
            user,
            posts
        }
    })

}

getPost = async (req, res, next) =>{
    // verify token
    const token = req.cookies.token;

    var decode = tokenVerification(token);
    if(!decode){
        res.status(401).json({code:200,msg:Messages.Unauthorized,data:{}});
        return;
    }

    var user = await User.findOne({_id:decode.id});
    if(!user){
        res.status(404).json({code:200,msg:Messages.UserNotFound,data:{}});
        return;
    }

    const paramId = req.params.id;
    var post = null;
    if(paramId) {
        try{
            post = await Post.findOne({_id:paramId});
        }
        catch(e){
            post = null;
        }
        
        if(!post) { 
            res.status(404).json({
                code: 1009,
                msg: Messages.PostNotFound,
                data:{}
            });
            return;
        }
    }

    res.status(200).json({
        code: 1010,
        msg: Messages.Success,
        data:{
            post
        }
    })

}

addPost = async (req, res, next) =>{
    // verify token
    const token = req.cookies.token;

    var decode = tokenVerification(token);
    if(!decode){
        res.status(401).json({code:200,msg:Messages.Unauthorized,data:{}});
        return;
    }

    var user = await User.findOne({_id:decode.id});
    if(!user){
        res.status(404).json({code:200,msg:Messages.UserNotFound,data:{}});
        return;
    }

    if(!req.body){
        res.status(200).json({code:1011,msg:Messages.EmptyPost,data:{}});
        return;
    }
    var postData = new Post({
        ...req.body, 
        from: user._id,
        likes: '0',
        comments: '0'
    });
    
    const newPost = await postData.save();

    res.status(200).json({
        code: 1010,
        msg: Messages.Success,
        data:{
            newPost,
        }
    })

}


module.exports = {
    homeFeed,
    userFeed,
    getPost,
    addPost
};
