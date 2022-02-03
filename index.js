const express = require('express');
const cors = require('cors');
const connection = require('./db/connection');
const bcryptjs = require('bcryptjs');
const PORT= process.env.PORT || 3000

// Config express
const app= express();
app.use(cors());
app.use(express.json());

//Routes
const user = require('./routes/user');
app.use('/user',user);

const todo = require('./routes/todo');
app.use('/todo',todo);


// Running server
app.listen(PORT, ()=>{
    console.log(`Server running on PORT: ${PORT}`);
})