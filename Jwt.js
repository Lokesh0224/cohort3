const express = require("express")
const jwt= require("jsonwebtoken") //npm install jsonwebtoken
const app= express()
app.use(express.json())//middleware

const JWT_SECRET= "lokeshlove"

const users= [];//inmemory variable


app.post('/signup', (req, res)=>{
    const username= req.body.username;
    const password= req.body.password;
    
    if(users.find(user=>user.username=== username)){
        res.json({
            message: "You are already signed up!!! "
        })
        return
    }

    users.push({
        username: username, 
        password: password
    })
    
    res.json({message: "You have signed up"})
 

})

app.post("/signin", (req, res)=>{

    const username= req.body.username
    const password= req.body.password
    
    const user= users.find(u=> u.username== username && u.password == password) 

    
    if(user){
        const token= jwt.sign({    //convert their username to a jwt
            username: username
        }, JWT_SECRET) //JWT_SECRET(means this is the main function which will convert the username to token) 
                       //is the function signature or jwt.sign
         
        res.json({
            token: token
        })
        console.log(users)
    }
    else{
        res.status(403).send({
            message:"Invalid username or password"
        })
    }
    
})

app.get("/me", (req, res)=>{
    const token = req. headers.token
    const decodedInformation = jwt.verify(token, JWT_SECRET)
    const username= decodedInformation.username
    const user= users.find(u=>u.username === username)

    if(user){
       res.json({
        username: user.username, 
        password: user.password
       }) 
    }
    else{
        res.status(403).json({
            message:" token invalid"
        })
    }
})


app.listen(3000, ()=> {
    console.log("Server is running on the port 3000")
})
