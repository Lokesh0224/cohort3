//middleware libraries

const express = require("express")
const cors= require("cors")
const app= express()

//when you're sending an post req it will reach req.body but it wont get stored
//in the const a or b because you didn't write the express middleware.

app.use(express.json())
app.use(cors())
app.post("/sum", function(req, res){
    console.log(req.body)
    const a= parseInt(req.body.a)
    const b= parseInt(req.body.b)

    res.json({ans: a+b})
})

app.listen(3000)