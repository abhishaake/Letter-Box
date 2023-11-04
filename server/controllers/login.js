const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
const { createSecretToken } = require("./secretToken.js");

// 1001 - 1005
const Messages = Object.freeze({
    UserAlreadyExists: 'User Already Exists',
    NewUserCreated: 'New User Created',
    UserDoesNotExists: 'User does not exists',
    InvalidCredentials: 'Invalid Credentials',
    LoginSuccess: 'Login Successful'
})

const User = mongoose.model('User');
        
registerUser = async (req, res, next) =>{
    const userData= req.body;
    // check if exists
    var user = await User.findOne({email: userData.email});
    
    if(user){
        res.status(200).json({
            code: 1001,
            msg: Messages.UserAlreadyExists,
            data: {}
        });
        return;
    }

    user = new User({
        ...userData,
        password: await bcrypt.hash(userData.password, 12)
    });

    let newUser = await user.save();

    res.status(200).json({
        code: 1002,
        msg: Messages.NewUserCreated,
        data: newUser
    });
}

loginUser = async (req, res, next) =>{
    const userData= req.body;
    // check if exists
    const user = await User.findOne({email: userData.email});

    if(!user){
        res.status(200).json({
            code: 1003,
            msg: Messages.UserDoesNotExists,
            data: {}
        });
        return;
    }

    if(!(await bcrypt.compare(userData.password,user.password))){
        res.status(200).json({
            code: 1004,
            msg: Messages.InvalidCredentials,
            data: {}
        });
        return;
    }
    
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
        sameSite: 'none',
        secure: true ,
        withCredentials: true,
        httpOnly: false,
    });
    res.status(200).json({
        code: 1005,
        msg: Messages.LoginSuccess,
        data: user
    });

}

module.exports = {
        registerUser,
        loginUser
};
    
