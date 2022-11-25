
var express = require("express");
var serv = express();

//Rota

serv.get("/sobre", function(req, res){
    res.sendFile(__dirname + "/dom.html");
});

serv.get("/blog", function(req, res){
    res.send("BEM-VINDOS")
});

serv.get("/", function(req, res){
    res.send("TMJ")
});


serv.listen(8090,function(){
    console.log("servidor rodando")
});


