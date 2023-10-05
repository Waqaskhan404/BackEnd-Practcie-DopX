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



// app.get("/",(req,res)=>{
//     res.send("<h1>Home</h1>")
// })

// Get All Books || Get Request
const getBook=(req,res)=>{
    res.json(books);
};


// Add New Book || Post Request
const postBook=(req,res)=>{
    const title=req.body.title;
    const author=req.body.author;
    const newItem={
        id:books.length+1,
        title:title,
        author:author
    }
    books.push(newItem);

    res.status(201);
    res.send(books)
};

// Update Book ||   Put Request

const updateBook=(req,res)=>{
    const id=parseInt(req.params.id);
    console.log(id);
    const updatedBook=req.body;
    const index=books.findIndex(book=>book.id===id);
    if(index!==-1){
        books[index]={...books[index],...updatedBook};
        res.json(books[index])
    }
    else{
        res.status(404).res.json({error:"Book not found"});
    }
};

// Delete Book || Delete Request

const deleteBook=(req,res)=>{
    const id=parseInt(req.params.id);
    const index=books.findIndex(book=>book.id===id);
    if(index!==-1){
        const deleteBook=books[index]
        books.splice(index,1);
        res.json(deleteBook)
    }
    else{
        res.status(404).res.json({error:"Book not found"});
    }
};


module.exports={getBook,postBook,updateBook,deleteBook};
