//assignment- figure out the methond it got logged and the timestamp on which the url is done

const express = require("express")

const app = express()

function loggermiddleware(req, res, next){
    console.log("Method is "+req.method)//will return the method it got logged
    console.log("Route is "+req.url)
    console.log("Host is "+req.hostname)

    console.log(new Date())//will give the current date and time 

    next()
}

app.use(loggermiddleware)

app.get("/sum/:a/:b", function(req, res){
     const a= parseInt(req.params.a);
    const b= parseInt(req.params.b);
    
    res.json({ans: a+b});
})

app.get("/multiply", function(req, res){
    const a= (req.query.a);
    const b= (req.query.b);
    
    res.json({ans: a*b});
})

app.get("/divide", function(req, res){
    const a= req.query.a;
    const b= req.query.b;
    
    res.json({ans: a/b});
})

app.get("/subtract", function(req, res){
    const a= req.query.a;
    const b= req.query.b;
    
    res.json({ans: a-b});
})
app.listen(3000)

// output

// Method is GET
// Route is /sum/10/20
// Host is localhost
// 2025-01-10T07:21:49.462Z