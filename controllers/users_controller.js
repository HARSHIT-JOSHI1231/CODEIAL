module.exports.profile = function(req, res){
    return res.render('user_profile',{
        title: 'User Profile'
    })
}

//render the signup page
module.exports.signUp = function(req, res){
    return res.render('user_sign_up',{
        title: 'Codeial || SignUp'
    })
}
//render the signin page
module.exports.signIn = function(req, res){
    return res.render('user_sign_in',{
        title: 'Codeial || SignIn'
    })
}

//get the sign up data
module.exports.create = function(req, res){

}

//for signin
module.exports.createSession = function(req, res){
    
}