const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/codeial_development');
mongoose.set("strictQuery", false);
const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to Mongodb"));


db.once('open', function(){
    console.log('Connected to database:: MongoDB')
})

module.exports = db;