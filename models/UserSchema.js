const mongoose = require('mongoose');

let User=mongoose.Schema({
    username: {
        type:String,
        required:true,
        minLength:4,
        maxLength:15,
        unique: true
    },
    password: {
        type:String,
        required:true,
        minLength:8
    },
})

module.exports=mongoose.model('user', User)