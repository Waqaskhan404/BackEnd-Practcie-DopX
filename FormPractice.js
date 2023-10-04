const express=require("express");
const path=require("path");



const app = express();
app.use(express.urlencoded({extended:false}))
app.use(express.static("public"));

// const logger=(req,res,next)=>{
//     console.log(`${new Date()} , Request :[${req.method}] ,  Response :[${req.url}]`);
//     next();
// }

// app.use(logger)


const books=[
    {
        id:1,
        title:"Monkey on the Wall",
        author:"Jamal"
    },
    {
        id:2,
        title:"fox and the Grapes",
        author:"Ahmed"
    },

]



app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"));
})
app.get("/books",(req,res)=>{
    res.json(books);
});

app.post("/books",(req,res)=>{

    const newItem={
        id:books.length+1,
        title:req.body.title,
        author:req.body.author
    }

    books.push(newItem);
    res.status(201);
    res.json(books);
});


app.listen(3000,(req,res)=>{
    console.log("Server is running on port 3000");
})