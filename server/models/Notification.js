const mongoose = require('mongoose');
    
const notificationSchema =  new mongoose.Schema({
    from:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    to:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    },
    type:{
        type: String,
        required: true
    },
    msg:{
        type: String,
        required: true
    },
    time: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Notification', notificationSchema);
console.log("Notification Schema created");