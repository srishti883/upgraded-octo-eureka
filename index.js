// const http = require('http');


// http.createServer((req, res) => {
//     res.write("<h1>hello to programming world of backend server </h1>");
//     res.end();
// }).listen(9000);


// Using express to createServer

// const express = require('express')

// const app = express();
// app.get('/',(req,res)=>{
//     res.send("hello to programming world ")
// })

// app.get('/about', (req, res) => {
//     res.send("hello to programming world of backend server ")
// })

// app.listen(9000)

// Using multer

const express = require('express');
const multer = require('multer');
const app = express();
// callback=cb
const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, "upload")
        },
        //correct filename
        filename: function (req, file, cb) {
            cb(null, file.fieldname + "-" + Date.now() + ".jpg")
        }


    })
}).single("user_file");

app.post("/upload",upload,(req, res) => {
    res.send("file uploading")
});

app.listen(9000);

