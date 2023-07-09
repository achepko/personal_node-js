const express = require('express');

const users = [
    {
        name:'Oleh',
        age:20,
        gender:'male'
    },
    {
        name:'Lena',
        age:20,
        gender:'male'
    },
    {
        name:'ANton',
        age:20,
        gender:'male'
    },
    {
        name:'Anna',
        age:20,
        gender:'male'
    },
]

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/users',(req,res)=>{
    res.status(200).json(users);
})
app.get('/users/:id',(req,res)=>{
    let {id} = req.params;
    res.status(200).json(users[+id]);
})
app.post('/users',(req,res)=>{
    users.push(req.body)
    res.status(201).json({
        message:"User created"
    });
    console.log(users);
})
app.put('/users/:id',(req,res)=>{
    let {id} = req.params;
    users[+id]=req.body;
    res.status(201).json({
        message:"User updated"
    });
    console.log(users);
})
app.delete('/users/:id',(req,res)=>{
    let {id} = req.params;
    users.splice(id,1);
    res.status(201).json({
        message:"User deleted"
    });
    console.log(users);
})


const PORT = 5001;

app.listen(PORT,()=>{
    console.log(`Server has started on PORT ${PORT}`)
})