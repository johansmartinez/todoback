const express = require('express');
const route= express.Router();
const TodoSchema = require('../models/TodoSchema');
const mongoose = require('mongoose');

route.get('/user', (req,res)=>{
    TodoSchema.find({author: mongoose.Types.ObjectId(req.query.id)},{title:1,text:1,created:1,state:1},(err,data)=>{
        if (err) res.status(400).send('Ha ocurrido un error al cargar los todos');
        else res.json(data);
    });
})

route.post('/add', (req,res)=>{
    let {title,text,author}=req.body;
    let newTodo= new TodoSchema({title,text, author});
    newTodo.save((err,data)=>{
        if(err) res.status(400).send('No se ha posido guardar el Todo');
        else res.status(200).send('Se ha creado el Todo exitosamente');
    });
})

route.post('/edit',(req,res)=>{
    let {id,title,text,state,created}= req.body;
    TodoSchema.findByIdAndUpdate({_id:id},{title,text,state,created},(err,data)=>{
        if(err) res.status(400).send('No se ha posido editar el Todo');
        else res.status(200).send('Se ha editado el Todo exitosamente');
    });
})

route.post('/delete',(req,res)=>{
    let {id}= req.body;
    TodoSchema.findByIdAndRemove({_id:id},(err,data)=>{
        if(err) res.status(400).send('No se ha posido editar el Todo');
        else res.status(200).send('Se ha editado el Todo exitosamente');
    });
})

module.exports= route;