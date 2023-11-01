const mongoose = require('mongoose');
    
const postSchema = new mongoose.Schema({
    from:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    msg:{
        type: String,
        required: true
    },
    time: {
        type: Date,
        default: Date.now()
    },
    likes:{
        type: String,
        required: true
    },
    comments:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Post', postSchema);
console.log("Post Schema created");