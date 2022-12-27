const User = require('../models/user');


module.exports.profile = function(req, res){
    return res.render('user_profile',{
        title: 'User Profile'
    })
}

//render the signup page
module.exports.signUp = function(req, res){

    if(req.isAuthenticated()){
        return res.redirect('/users/profile')
    }
    return res.render('user_sign_up',{
        title: 'Codeial || SignUp'
    })
}
//render the signin page
module.exports.signIn = function(req, res){
    
    if(req.isAuthenticated()){
        return res.redirect('/users/profile')
    }
    return res.render('user_sign_in',{
        title: 'Codeial || SignIn'
    })
}

//get the sign up data
module.exports.create = function(req, res){
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }
    console.log(req.body)
     User.findOne({email: req.body.email}, function(err, user){
        if(err){console.log('error in finding user anad signing up'); return}

        console.log(user);
        if(!user){
            User.create({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }
            , function(err, user){
                if(err){console.log('error in creating user while signing up'); return}

                return res.redirect('/users/sign-in');
            })
        }else{
            return res.redirect('back');
        }
        //return res.send("Harshit")
    
    }) 
}
//for signin
module.exports.createSession = function(req, res){
    return res.redirect('/');
}

module.exports.destroySession = function(req, res, next){
    req.logout(function(err) {
        if (err) { 
          return next(err); 
          }
        res.redirect('/');
      });
};