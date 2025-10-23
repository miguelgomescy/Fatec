const Sequelize = require ("sequelize");
const sequelize =  new sequelize ("exemplo_aula", "root", "",{
    host: "localhost",
    dialect: "mysql"
}) 

sequelize.authenticate().then(function({
    console.log('Banco de Dados conectado com Sucesso!')

}).catch(function(erro){
    
})

