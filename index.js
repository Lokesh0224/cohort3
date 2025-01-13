const express = require("express")

const app= express()
app.use(express.json())//middleware

const users= [];//inmemory variable

function generateToken(){
    let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let token =""
    for(let i= 0; i<32; i++){
        token += options[Math.floor(Math.random()* options.length)]//Math.random() will gives a number b/w o and 1
    }
    return token;

}

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
        const token= generateToken()
        user.token = token
        res.send({
            token
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
    const user= users.find(u=>u.token === token)

    if(user){
       res.json({
        username: user.username, 
        password: user.password
       }) 
    }
    else{
        res.statusjson({
            message:" token invalid"
        })
    }
})


app.listen(3000, ()=> {
    console.log("Server is running on the port 3000")
})