const express = require('express');
const port = 8000;
const app = express();





app.listen(port, function(err){
    if(err){
        console.log(`Error in starting port:: ${8000}`)
        return;
    }
    console.log(`Server started in port: ${port}`)
})