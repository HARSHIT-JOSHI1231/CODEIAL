const Post = require('../models/post');
const { prependOnceListener } = require('../models/user');

module.exports.home = function(req, res){
    //res.cookie('user_id', 25);
    /* Post.find({}, function(err, posts){
        return res.render('home',{
            title: 'Codeial | Home',
            posts: posts
        });
    }); */
    //populate the user of each post
    Post.find({}).populate('user').exec(function(err, post){
        return res.render('home',{
            title: 'Codeial | Home',
            posts: post
        });
    })
    }
