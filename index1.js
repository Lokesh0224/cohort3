const express = require("express")

const app = express()

const users =[{
    name: "John", 
    kidneys:[{
        healthy:false
    }]
}]

app.get("/", function(req, res){
    const johnKidneys = users[0].kidneys;
    const numberOfKidneys= kidneys.lenght;
    let numberOfHealthyKidneys =0;

})

app.post("/", function(req, res){
    const isHealthy = req. body.isHealthy;
    users[0]. kidneys. push({
        healthy: isHealthy
    })
    res.json({
        msg:"Done"
    })
})
app.listen(3000)