import express from "express";
import fs, { readFileSync } from "fs";
import { format } from "date-fns";
import path from "path";

const app = express();
const PORT = 4000;

app.get("/", (req, res) => {
  let today = format(new Date(), "dd-MM-yyyy HH-mm-ss");
  let message = "Generated at: ";
  let content = `${message}${today}`;

  const filePath = `TimeStamp/${today}.txt`;
  fs.writeFileSync(filePath, content, "utf8");

  let data = readFileSync(filePath, "utf8");

  // HTML content with color and style
  const styledContent = `
    <html>
      <head>
        <title>Express Timestamp Task</title>
        <style>
          body {
            font-family: 'Arial', sans-serif;
            background-color: #f4f4f4;
            color: #333;
            text-align: center;
            padding: 20px;
          }
          h1 {
            color: #2c3e50;
          }
          p {
            font-size: 18px;
          }
        </style>
      </head>
      <body>
        <h1>Express Timestamp Task</h1>
        <p>${content}</p>
      </body>
    </html>
  `;

  res.status(200).send(styledContent);
});

app.get("/getTextFiles", (req, res) => {
  const folderPath = "TimeStamp";

  fs.readdir(folderPath, (err, files) => {
    if (err) {
      console.log(err);
      res
        .status(500)
        .send("An error occurred while listing the files from directory");
    } else {
      const textFiles = files.filter((file) => path.extname(file) === ".txt");
      res.status(200).json(textFiles);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
