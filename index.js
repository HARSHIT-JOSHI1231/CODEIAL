const express = require('express');
const port = 8000;
const app = express();
const expressLayouts = require('express-ejs-layouts');

app.use(expressLayouts);

//use express router
app.use('/', require('./routes'));

//setup the view engine
app.set('view engine', 'ejs');
app.set('views', './views')



app.listen(port, function(err){
    if(err){
        console.log(`Error in starting port:: ${err}`)
        return;
    }
    console.log(`Server started in port: ${port}`)
})