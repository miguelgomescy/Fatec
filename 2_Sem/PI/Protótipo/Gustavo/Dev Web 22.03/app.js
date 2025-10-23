const express = require("express");
const app = express();
const handlebars = require("express-handlebars").engine;
const bodyParser = require("body-parser");
const post = require("./models/post");

app.engine("handlebars", handlebars({defaultLayout:"main"}));
app.set("view engine","handlebars");

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.listen("8081", ()=>{
    console.log("Servidor ativo!");
});

app.get("/", (req, res)=>{
    res.render("cadastrar");
});

app.post("/cadastrar", function(req, res){
    post.create({
        nome: req.body.nome,
        telefone: req.body.telefone,
        origem: req.body.origem,
        data_contato: req.body.data_contato,
        observacao: req.body.observacao
    }).then(function(){
    res.redirect("/")
}).catch(function(erro){
res.send("Falha ao cadastrar os dados: " + erro)
})
})   

app.get("/consultar", (req, res)=>{
    res.render("consultar");
})

app.get("/atualizar", (req, res)=>{
    res.render("atualizar");
})
