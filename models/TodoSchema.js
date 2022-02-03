const mongoose = require('mongoose');

let Todo=new mongoose.Schema({
    created:{type:Date, default:Date.now},
    title:String,
    text: String,
    state:{type:String, default:'EN PROCESO'},
    author: {type:mongoose.Schema.Types.ObjectId, ref:'user'}
})

module.exports=mongoose.model('todo', Todo);