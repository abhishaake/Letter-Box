const mongoose = require('mongoose');
    
const userSchema =  new mongoose.Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    pic:{
        type: String,
        required: false
    },
    password:{
        type: String,
        required: true
    },
    time: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('User', userSchema);
console.log("User Schema created");