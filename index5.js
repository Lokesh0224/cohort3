//middleware libraries

const express = require("express")
const cors= require("cors")
const app= express()

app.use(express.json())/*When you use app.use(express.json()), Express adds middleware that: 
                         Reads the raw JSON string from the request body.
                         Parses (converts) the string into a JavaScript object.
                         Attaches the resulting object to req.body. */

app.use(cors())
app.post("/sum", function(req, res){
    console.log(req.body)
    const a= parseInt(req.body.a)
    const b= parseInt(req.body.b)

    res.json({ans: a+b})
})

app.listen(3000)
