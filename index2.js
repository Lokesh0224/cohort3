const express = require("express")

const app= express()


function isOldEnoughMiddleware(req, res, next){
    const age= req.query.age;
    if(age>=16)
        next();
    else
        res.json({
            msg:"You have to grow more!"
        })
}

//the functions in the get handler is the next part of the isOldEnoughMiddleware
//if you want to use the same middleware for all the handlers then use app.use(isOldEnoughMiddleware), also the oder matters here first the use app.use then only app.get those things and all

app.get("/ride1",isOldEnoughMiddleware ,function(req, res){
    
        res.json({
            msg:"You have riden the first ride"
        })
})

app.get("/ride2",isOldEnoughMiddleware ,function(req, res){
    
        res.json({
            msg:"You have riden the second ride"
        })
})

app.listen(3000)