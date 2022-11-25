var express = require("express");
var parametro = express();

//Parametros

parametro.get("/sobre/:nome/:cargo/:cor", function(req, res){
    res.send(`<h1>Ola ${req.params.nome}</h1> <h2>Seu Cargo e: ${req.params.cargo}</h2> <h3>Sua Cor Favorita e: ${req.params.cor}</h3>`);
});

parametro.get("/blog/:texto/:imagens/:videos", function(req, res){
    res.send(`<h1>Ola Seu Texto preferivel e: ${req.params.texto}</h1> <h2> vc gosta de ver imagens do tipo: ${req.params.imagens}</h2> <h3>Seu video  Favorito e sobre: ${req.params.videos}</h3>`);
});

parametro.get("/news/:transito/:camaragibe/:jaboatao", function(req, res){
    res.send(`<h1>Ola, para onde quer ir? ${req.params.transito}</h1> <h2> Melhor nao ir, mas ja que quer, va por: ${req.params.camaragibe}</h2> <h3>Outra opcao: ${req.params.jaboatao}</h3>`);
});

parametro.get("/parceiros/:nome/:cargo/:cor", function(req, res){
    res.send(`<h1>Ola ${req.params.nome}</h1> <h2>Seu Cargo e: ${req.params.cargo}</h2> <h3>Sua Cor Favorita e: ${req.params.cor}</h3>`);
});

parametro.get("/projetos/:nome/:cargo/:cor", function(req, res){
    res.send(`<h1>Ola ${req.params.nome}</h1> <h2>Seu Cargo e: ${req.params.cargo}</h2> <h3>Sua Cor Favorita e: ${req.params.cor}</h3>`);
});

parametro,getComputedStyle

parametro.listen(8090,function(){
    console.log("servidor rodando na url http:localhost:8090")
});