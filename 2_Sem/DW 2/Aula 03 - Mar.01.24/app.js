const express = require ("express");
const app = express();

app.listen(8081, function(){
    console.log("Servidor Ativo")
});

app.get("/", function(req, res){
    console.log("Página Principal")
    res.send("Página Principal")
})

app.get("/contato", function(req, res){
    console.log("Página Contato")
    res.send("Página Contato")
}) 


app.get("/cadastrar/:item", function(req, res){
    
    res.send("Página de Cadastro " + req.params.item)

}) 

app.get("/produto/:item/:quantidade", function(req, res){
    res.send("Página de Produtos: " + req.params.item  + req.params.quantidade)
})



app.get("/carros/:modelo/:ano/:cor", function(req, res){
    res.send("Página de Carros: " + req.params.modelo + " ano: " + req.params.ano + " cor: " + req.params.cor)
})