const express = require("express")

const app= express()

let requestCount =0;

function requestIncreaser(req, res, next){
    requestCount++
    console.log("Total No.of requests = "+requestCount)
    next() 

}

function realSumHandler(req, res){
    const a= parseInt(req.query.a)
    const b= parseInt(req.query.b)
    
    res.json({ ans: a+b})
}
   
//middleware(in this case "requestIncreaser")  means 1. it may or may not change the request object, 
// 2.it will either stop the request right there or forward the request to the real route handler

app.get("/sum", requestIncreaser, realSumHandler)

app.get("/multiply", function(req, res){
})

app.get("/divide", function(req, res){
})


app.listen(3000)



// app.get("/sub", requestIncreaser ,function(req, res){
// })
// app.get("/sub",requestIncreaser ,function(req, res){
// })

//*the above step is equivalent to the below step*

// app.use(requestIncreaser)    this is called global middleware
// app.get("/sub", function(req, res){
// })
// app.get("/sub", function(req, res){
// })

