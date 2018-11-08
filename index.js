const http      = require("http");
const express   = require("express");
const path      = require("path");
const PORT      = 3000;
const hostname  = '127.0.0.1';

express()
    //App Config
    .use(express.static(path.join(__dirname, 'public')))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')

    //Routes
    .get('/', (req, res) => res.render('index'))
    .get('/about', (req, res) => res.render('about'))
    .get('/contact', (req, res) => res.render('contact'))
    .get('/resume', (req, res) => res.sendFile('public/documents/Hibbard WebDev Resume.pdf', { root : __dirname}))

    .listen(PORT, hostname, (req, res) => {
        console.log(`Mike is Listening at http://${hostname}:${PORT}/`)
    })
