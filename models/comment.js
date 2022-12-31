const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    content:{
        type: String,
        required: true
    },
    //comment belong to a user
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    },
    //include the array of ids of all comments in the posts schema itself
    comment: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'comment'

    }
        ]
},{
    timestams: true
})

const Comment = mongoose.model('Comment',commentSchema);
module.exports = Comment