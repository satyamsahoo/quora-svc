const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userId : {
        type : String,
        unique : true,
        required : true
    },
    name : {
        type : String,
        required : true
    },
    email :{
        type : String,
        required : true,
        unique : true
    },
    password :{
        type : String,
        required : true
    }
})

module.exports = mongoose.model('User', userSchema);