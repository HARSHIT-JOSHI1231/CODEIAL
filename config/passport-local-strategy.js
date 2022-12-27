const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/user');

//authentication using passport
passport.use(new LocalStrategy({
        usernameField: 'email'
    },
    function(email, password, done){
        //find the user and establish the identity
        User.findOne({email: email}, function(err, user){
            if(err){console.log('Error in finding User --->passport')
            return done(err);
        }

            if(!user || user.password != password){
                console.log('Invalid Username/Password');
                return done(null, false);
            }

            return done(null, user);

        });
    }
));

//Serializing the user to decide which key is to be kept in cookie
passport.serializeUser(function(user, done){
        done(null, user.id);
})


//DeSerializing the user fron the key in the cookie
passport.deserializeUser(function(id, done){
        User.findById(id, function(err, user){
            if(err){console.log('Error in finding User --->passport')
            return done(err);
        }

        return done(null, user);
        })
});

module.exports = passport;