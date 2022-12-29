const mongoose = require('mongoose');


const postSchema = new mongoose.Mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.objectId,
        ref: 'User',
    }
},{
    timestamps: true
});

const Post = mongoose.model('Post',postSchema);

module.exports = Post;