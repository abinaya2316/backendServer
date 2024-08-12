const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const userModel=require('./user')
const UserModel = require('./user')


//cors->cross origin resource sharing)
const app=express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://727722euec040:Suresan09@cluster0.iyhys.mongodb.net/crud")

app.post("/CreateUser",(req,res)=>{
    UserModel.create(req.body)
    .then(users=>res.json(users))
    .catch(users=>res.json(err))
})

app.get('/',(req,res)=>{
    UserModel.find({})
    .then(users=>res.json(users))
    .catch(users=>res.json(err))
})

app.get('/getUser/:id',(req,res)=>{
    const id=req.params.id;
    UserModel.findById({_id:id})
    .then(users=>res.json(users))
    .catch(users=>res.json(err))
})

app.put('/updateUser/:id',(req,res)=>{
    const id=req.params.id;
    UserModel.findByIdAndUpdate({_id:id},{
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    })
    .then(users=>res.json(users))
    .catch(users=>res.json(err))
})

app.delete('/deleteUser/:id',(req,res)=>{
    const id=req.params.id;
    UserModel.findByIdAndDelete({_id:id})
    .then(users=>res.json(users))
    .catch(users=>res.json(err))
})
app.listen(3001,()=>
    console.log("server is running")
)