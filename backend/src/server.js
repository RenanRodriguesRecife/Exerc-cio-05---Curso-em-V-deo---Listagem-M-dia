const express = require('express')
const app = express();

// req.query = Acessar query params (?idade=3 (filtros))
// req.params = Acessar route param (para edição e delete)
// req.body = Acessar corpo da requisição (para criação, edição)

app.use(express.json())

app.get('/',(req,res)=>{
    return res.json({message: "Hello World"});
})

app.post('/users',(req,res)=>{
    return res.json({req.body});
})

app.get('/users',(req,res)=>{
    return res.json({id: req.query.idade});
})

app.put('/users/:id',(req,res)=>{
    return res.json({id: req.params.id});
})

app.listen(3333);