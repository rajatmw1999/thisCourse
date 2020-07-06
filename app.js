//jshint esversion: 6
const express = require("express");
const app =express();
app.set('view engine','ejs');
app.use(express.static("public"));

app.get("/login",function(req,res){
    res.render('index');
});
app.get("/signup",function(req,res){
    res.render('sign');
});

app.listen(3000,function(){
    console.log("Server Running on port 3000");
    
});