import express, { json } from "express";
import fs from 'fs'
import { format } from "date-fns";
import { send } from "process";
const app = express();
const PORT = 80; //https://localhost:4000

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

app.get('/write-read', (req, res) => {
    let today = format(new Date(), 'dd-mm-yyyy-HH-MM-ss');
    console.log("Today : ", today);
    const filePath = `TimeStamp/${today}.txt`;

    fs.writeFileSync(filePath, `${today}`, 'utf8')
    let data = fs.readFileSync(filePath , 'utf8');
    res.status(200), send()
})

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
}); //running

// app.use(); // middleware
// app.get("/");
//http://localhost:4000/getProducts
// import express from "express";
// import fs, { readFileSync } from "fs";
// import { format } from "date-fns";
// import path from "path";

// const app = express();
// const PORT = 4000;

// app.get("/", (req, res) => {
//   let today = format(new Date(), "dd-mm-yyyy-HH-MM-ss");
//   const filePath = `TimeStamp/${today}.txt`;
//   fs.writeFileSync(`filePath, ${today}, 'utf8'`);
//   let data = readFileSync(filePath, "utf8");
//   res.status(200).send(data);
// });
// app.get("/getTextFiles", (req, res) => {
//   const folderPath = "TimeStamp";
//   fs.readdir(folderPath, (err, files) => {
//     if (err) {
//       console.log(err);
//       res
//         .status(500)
//         .send("An error occured while listing the files from directory");
//     } else {
//       const textFiles = files.filter((file) => path.extname(file) === ".txt");
//       res.status(200).json(textFiles);
//     }
//   });
// });
// app.listen(PORT, () => {
//   console.log(`Server listening at http://localhost:${PORT}`);
// }); //running status
