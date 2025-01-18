const express = require("express")
const jwt= require("jsonwebtoken")

const app = express()
app.use(express.json());
const JWT_SECRET="lokeshlove"

const logger=(req, res, next)=>{
    console.log(req.method+"request came")
    next()

}

const users=[]

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/Frontend/index.html") //__dirname is a globla name by default which holds the current directory
})
app.post("/signup", logger, (req, res)=>{
    const username= req.body.username
    const password = req.body.password
    const user = users.find(user=>user.username ===username )

    if(user){
        res.json({
            message:"You're already a signedup!!!"
        })
        return 

    }
    users.push({
        username:username,
        password:password
    })
    res.json({message:"You are signed-up"})
})

app.post("/signin", logger, (req, res)=>{
    const username= req.body.username
    const password= req.body.password

    const user= users.find(user=>user.username ===username && user.password===password)

    if(user){
        const token= jwt.sign({
            username:username
        }, JWT_SECRET)

        res.json({
            token:token
        })
    }
    else{
        res.status(403).send({
            message:"Invalid username or password"
        })
    }
})
const auth= (req, res, next)=>{
    const token= req.headers.token
    const decodedInformation= jwt.verify(token, JWT_SECRET)// the decoded information will be returned as javaScript object
    const username= decodedInformation.username
    if(username){
        req.username= username
        next()
    }
    else{
        res.json({
            message:"You are not logged in"
    })
    }
}



app.get("/me", logger, auth,(req, res)=>{
    
    const user=users.find(user=>user.username===req.username)
    

    if(user){
        res.json({
            username:user.username,
            password:user.password
        })
    }
    else{
        res.status(403).json({
            message:"token invalid"
        })
    }
})

app.get("/todo", auth, (req, res)=>{

})

app.post("/todo", auth, (req, res)=>{

})

app.delete("/todo", auth, (req, res)=>{

})

app.listen(3000, ()=> {
    console.log("Sever is running in the port 3000")
})

