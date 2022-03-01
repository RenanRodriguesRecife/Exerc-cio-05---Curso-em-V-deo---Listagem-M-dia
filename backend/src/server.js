const express = require('express')
const app = express();

app.get('/',(req,res)=>{
    return res.json({message: "Hello World"});
})

app.post('/users',(req,res)=>{
    return res.json({message: "Hello omnistack"});
})

app.listen(3333);