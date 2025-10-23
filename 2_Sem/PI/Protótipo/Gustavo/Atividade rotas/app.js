const express = require ("express")
const app = express()

app.listen(8061, function(){
    console.log("Servidor Ativo")
})

app.get("/", function(req, res){
    console.log("Página Principal")
    res.send('Página Principal')
})

app.get("/cadastrar", function(req, res){
    res.send("Página do Cadastro" + req.params.cadastrar)
})

app.get("/produtos/item/quantidade", function(req, res){
res.send("Produtos " + req.params.produtos + " Item " + req.params.item + " Quantidade " + req.params.quantidade)
})

app.get("/contato", function(req, res){
    res.send("Contato " + req.params.contato)
})
