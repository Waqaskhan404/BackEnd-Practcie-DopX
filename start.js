// How to Create server 
const express=require("express");
const path=require("path")
// const phones=require("phones")

const app =express();



// Create Routes 
app.get("/",(req,res)=>{
    res.send("<h1>Home Page</h1> <ul><li > <a href='/'>HOME</a></li> <li> <a href='/about'>About</a></li> <li><a href='/contact'>Contact </a></li><li><a href='/service'>Service</a></li> <li><a href='/htmlPage'> HtmlPage</a></li>    </ul>");
})


app.get("/about",(req,res)=>{
    res.send("<h1>About Page</h1>");
})
app.get("/contact",(req,res)=>{
    res.send("<h1>Contact Page</h1>");
})
app.get("/service",(req,res)=>{
    res.send("<h1>Service Page</h1>");
})

app.get("/htmlPage",(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"));
})


app.all("*",(req,res)=>{
//    const statusCode= res.sendStatus(404);
    res.send(`<h1> Page Not Found </h1>`);
})


// Create Server 
app.listen(3000,(req,res)=>{
    console.log("Server is running on port 3000");
})