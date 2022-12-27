const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser  = require('body-parser');
const port = 8000;
const app = express();
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
//used for session cookie
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy')


app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({
    extended: true
  })); 

//setting up static file
app.use(express.static('./assets'));

app.use(expressLayouts);
//extract styles and scripts from subpages into layouts
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);



//setup the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(session({
    name: 'CODEIAL',
    //todo change the secret before deployment in production mode
    secret:'blahsomething',
    saveUninitialized: false,
    resave: false,
    cookie:{
        maxAge: (1000* 60*100)
    }
}))

app.use(passport.initialize());
app.use(passport.session());


//use express router
app.use('/', require('./routes'));

app.listen(port, function(err){
    if(err){
        console.log(`Error in starting port:: ${err}`)
        return;
    }
    console.log(`Server started in port: ${port}`)
})