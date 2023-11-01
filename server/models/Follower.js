const mongoose = require('mongoose');
    
const followerSchema = new mongoose.Schema({
    follower:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    followee:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    time: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Follower', followerSchema);
console.log("Follower Schema created");