const express = require('express');
const route= express.Router();
const bcryptjs = require('bcryptjs');
const rounds = require('../config/encrypt');

const UserSchema = require('../models/UserSchema');

route.post('/create', async (req,res)=>{
    let {username, password}= req.body
    let newUser= new UserSchema({username, password:await bcryptjs.hash(password,rounds)});
    newUser.save((err,data)=>{
        if (err) res.status(400).send('Ocurrió un error al crear un usuario');
        else res.json({id:data._id});
    });
})

route.post('/login',async (req,res)=>{
    let {username,password}= req.body;
    UserSchema.findOne({username}, async (err,data)=>{
        if (err) res.status(400).send('Ningún usuario se encuentra registrado con estos datos');
        else {
            if (await bcryptjs.compare(password,data.password)) res.json({id:data._id});
            else res.status(400).send('La contraseña y el usuario no coinciden');
        }
    });
})


module.exports= route;