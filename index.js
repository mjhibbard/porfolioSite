const express   = require("express");
const server    = express();
const http      = require("http");
const https     = require("https");
const path      = require("path");
const fs        = require("fs");
const PORT      = 3001;
const hostname  = '127.0.0.1';
const creds     = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem'),
    passphrase: "8675309"
};
http.createServer(server)
    .listen(PORT, hostname, (req, res) => {
        console.log(`Mike is Listening at http://${hostname}:${PORT}/`);
    })
https.createServer(creds, server)
    .listen(8443, (req, res) => {
        console.log(`Mike secure server is running on https://localhost:${PORT} or 8443/ `);
    })

server
    //App Config
    .use(express.static(path.join(__dirname, 'public')))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')

    //Routes
    .get('/', (req, res) => res.render('index'))
    .get('/about', (req, res) => res.render('about'))
    .get('/contact', (req, res) => res.render('contact'))
    .get('/resume', (req, res) => res.sendFile('public/documents/Hibbard WebDev Resume.pdf', { root : __dirname}))
