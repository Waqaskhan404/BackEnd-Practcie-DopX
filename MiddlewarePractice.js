const express=require("express");

const app =express();

// We can Use Morgan as Middleware
// npm i morgan

const logger=(req,res,next)=>{
    console.log(`${new Date()} , Request :[${req.method}] ,  Response :[${req.url}]`);
    next();
}

app.use(logger)

app.get("/",(req,res)=>{
    res.send("<h1>Home</h1>")
})
app.get("/about",(req,res)=>{
    res.send("<h1>About</h1>")
})


app.listen(3000,(req,res)=>{
    console.log("Server is running on port 3000")
})