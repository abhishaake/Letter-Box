const mongoose = require('mongoose');
    
const commentSchema = new mongoose.Schema({
    from:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    msg:{
        type: String,
        required: true
    },
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    },
    time: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Comment', commentSchema);
console.log("Comment Schema created");