import express from "express";

const app = express();
const PORT = 4000; //https://localhost:4000

app.get('/', (req, res) => {
  res.status(200).json({ message: "Welcome to the My API" });
});

app.get("/get-data", (req, res) => {
  res.status(200).json({ message: "data",data:{name:"chandru"} });
});

// Example route for getting all books
app.get("/books", (req, res) =>{
    const books = [
        {"title": "Book One"},
        {"title": "Book Two"}
    ];
    res.json(books);
});
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
}); //running

// app.use(); // middleware
// app.get("/");
//http://localhost:4000/getProducts
