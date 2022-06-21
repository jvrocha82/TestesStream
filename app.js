import axios from "axios";
import express from "express";
const app = express();
import { createReadStream, readFile , createWriteStream } from "fs";
const port = process.env.PORT || 3000;
import bodyParser from'body-parser';
app.get("/download", async function (req, res) {
    createReadStream("C:/Users/jvroc/Documents/APS 3 FINAL.pdf")
    .pipe(res)



//   const file = readFile("C:/Usersjvroc/Documents/APS 3 FINAL.pdf"); //.toString()
//   res.write(file, "utf8");
//   res.end();
});
app.post("/upload" ,(req, res) => {
    let read = createReadStream(req)
    let write = createWriteStream("./file")
    write.pipe(read)
    console.log('teste')
 
})
app.get("/", (req, res) => {
  res.send("api online");
});

app.listen(3000, () => {
  console.log("rodando na porta http://3000");
});
