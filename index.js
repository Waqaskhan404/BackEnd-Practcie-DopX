const express=require("express");
const bookRoutes=require("./routes/bookRoutes")

const app = express();
// app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use("/",bookRoutes)





app.listen(3000,(req,res)=>{
    console.log("Server is running on port 3000");
})