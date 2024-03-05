import express from "express";
import fs, { readFileSync } from "fs";
import { format } from "date-fns";
import path from "path";

const app = express();
const PORT = 8000;

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

      // HTML content with styles for getTextFiles
      const styledTextFiles = `
        <html>
          <head>
            <title>Text Files List</title>
            <style>
              body {
                font-family: 'Arial', sans-serif;
                background-color: #dfe6e9;
                color: #2d3436;
                text-align: center;
                padding: 20px;
              }
              h1 {
                color: #2c3e50;
              }
              ul {
                list-style-type: none;
                padding: 0;
              }
              li {
                margin-bottom: 10px;
                font-size: 16px;
              }
            </style>
          </head>
          <body>
            <h1>Text Files List</h1>
            <p>Date and Time: ${format(new Date(), "dd-MM-yyyy HH:mm:ss")}</p>
            <ul>
              ${textFiles.map((file) => `<li>${file}</li>`).join("")}
            </ul>
          </body>
        </html>
      `;

      res.status(200).send(styledTextFiles);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
