const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const index = express()
index.use(express.json())


index.use(cors({
    origin:true
}))
const userschema=new mongoose.Schema({
    username:{
        type:String
    },
    email:{
        type:String
    },
    phone:{
        type:Number
    },
    adress:{
        type:String
    },
    password:{
        type:String
    }
})
const User=mongoose.model("User",userschema)




// index.get("/register",(req,res)=>{
//     res.send("hello")
// })

index.post("/regsiter",(req,res)=>{

    User.findOne({email:req.body.email}).then((Use)=>{
        console.log(Use);
        if(Use){
            res.send("user present so login")
        }else{
            bcrypt.hash(req.body.password,13).then((hashedpassword)=>{
                console.log(hashedpassword);
                if(hashedpassword){
                    const newuser=User({
                        username:req.body.name,
                        email:req.body.email,
                        phone:req.body.phone,
                        adress:req.body.adress,
                        password:hashedpassword
                     })
                     newuser.save().then(()=>{
                        res.send("save")
                     }).catch(erro=>{
                        console.log("some promble");
                     })
                }
            })
        }
    })
    console.log(req.body);
    
    // res.send(req.body)

})

index.post("/login",(req,res)=>{
    User.findOne({email:req.body.email}).then((Use)=>{
        console.log(Use);
        if(Use){
            bcrypt.compare(req.body.password,Use.password,(err,reslut)=>{
                if(err){
                    res.send("erro on comparing password")
                }else{
                    if(reslut){
                        const token=jwt.sign(req.body.email,"index")
                        console.log(token);
                        res.send(token)
                    }else{
                        res.send("not match")
                    }
                }
            })
        }
    })
    

    
    // console.log(req.body);

    // res.send(req.body)
 })

mongoose.connect("mongodb+srv://abiragkc37:pyVQK0m9zoZE9hJq@cluster0.eccdh9l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
    console.log("data basce is connected");
}).catch((erro)=>{
    console.log("data base is not connected");
})



index.listen(9000,()=>{
    console.log("server listen at 9000");
})