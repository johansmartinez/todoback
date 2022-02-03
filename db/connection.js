const mongoose = require('mongoose');

const {url}=require('../config/keydb');

const connectionParams={
    useNewUrlParser:true,
    useUnifiedTopology:true
}
mongoose.connect(url, connectionParams)
.then(()=>{
    console.log("Connected to database");
}).catch((err)=>{
    console.log(err);
})
