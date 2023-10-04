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
// app.get('/api/product/:productId',(req,res)=>{
//     const {productId}=req.params;
//     const singleProduct=phone.find((product)=> {return product.id===Number(productId)})
//     console.log(singleProduct)
//     res.json(singleProduct)

// })

// Query String 

// url for Query String ===    http://localhost:3000/api/v1/query?search=s&limit=2

app.get('/api/v1/query', (req, res) => {
    console.log(req.query);
    let sortPhone = [...phone];
    let { search, limit } = req.query;
    
    if (search) {
      sortPhone = sortPhone
        .filter((product) => product.name.toLowerCase().startsWith(search.toLowerCase()))
        .slice(0, parseInt(limit, 10) || sortPhone.length);
    }
  
    res.json(sortPhone);
  });
  




app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})
