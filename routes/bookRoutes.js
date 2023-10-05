const express=require("express");
const bookController=require("../controller/bookController")
const router=express.Router();


router.get("/",bookController.homeResponse);
router.get("/books",bookController.getBook);
router.post("/books",bookController.createBook);
router.put("/books/:id",bookController.updateBook);
router.delete("/books/:id",bookController.deleteBook);


module.exports=router;