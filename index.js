const express   = require("express");
const path      = require("path");
const PORT      = 3000;
//const app = express();

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

    .listen(PORT, (req, res) => console.log('Mike is Listening!!'))



// app.set("view engine", "ejs");
// app.use(express.static(__dirname + '/public'));
// app.use(express.static(__dirname + '/views'));

// app.get("/", function (req, res){
//     res.render("index");
// });

// app.get("/about", function(req, res){
//     res.render("about");
// });

// app.get("/contact", function(req, res){
//     res.render("contact");
// });

// app.get("/resume", function(req, res){
//     res.sendFile('public/documents/Hibbard WebDev Resume.pdf', { root : __dirname});
// });

// app.listen(3000, function(){
//     console.log("Mike is Listening!!");
// });

//nodemon index.js