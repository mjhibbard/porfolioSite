const express = require("express");
const app = express();

//App Config
app.set("view engine", "html");
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));

app.get("/", function (req, res){
    res.render("index");
});

app.get("/about", function(req, res){
    res.send("You've made it to the about route!");
});

app.get("/contact", function(req, res){
    res.send("Contact me via instant mind waves!")
})

app.get("/resume", function(req, res){
    res.send("You want my resume? Thanks a TON!!!");
});

app.listen(3000, function(){
    console.log("Mike is Listening!!");
});

//nodemon index.js