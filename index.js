const express = require('express');
const port = 8000;
const app = express();

//use express router
app.use('/', require('./routes'))



app.listen(port, function(err){
    if(err){
        console.log(`Error in starting port:: ${err}`)
        return;
    }
    console.log(`Server started in port: ${port}`)
})