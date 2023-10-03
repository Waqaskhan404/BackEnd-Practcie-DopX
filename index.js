const express = require("express");
const path=require("path");
const app=express();
const phone =require("./phoneData")


// Static Website 

// app.use(express.static("healet-html"))


// app.get("/",(req,res)=>{
//     res.sendFile(path.join(__dirname,"healet-html","index.html"));
// })
app.get("/",(req,res)=>{
    res.send("<h1>Home</h1>");
})


// If you want to return some Data
// app.get("/",(req,res)=>{
//     const newItem=phone.map((product)=>{
//         const {id,name,price}=product;
//         return {id,name,price}
//     })
//     res.json(newItem)
// })

// use Params 
app.get('/api/product/:productId',(req,res)=>{
    const {productId}=req.params;
    const singleProduct=phone.find((product)=> {return product.id===Number(productId)})
    console.log(singleProduct)
    res.json(singleProduct)

})


app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})
