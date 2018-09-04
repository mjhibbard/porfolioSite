const express = require("express");
const app = express();

//App Config
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));

app.get("/", function (req, res){
    res.render("index");
});

app.get("/about", function(req, res){
    res.render("about");
});

app.get("/contact", function(req, res){
    res.render("contact");
});

app.get("/resume", function(req, res){
    res.sendFile('public/documents/Hibbard WebDev Resume.pdf', { root : __dirname});
});

app.listen(3000, function(){
    console.log("Mike is Listening!!");
});

//nodemon index.js