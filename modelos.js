const Sequelize = require('sequelize')
const sequelize = new Sequelize ('cad_senac', 'root', '123456',{
    host: "localhost",
    dialect: "mysql"
})
 //criar dois models
 //postagem
 //usuarios
 //sequelize.define - define os campos da tabela
 //postagens - será o nome da tabela
 //Dentro das {} define os campos
 const Postagem = sequelize.define('postagens',{
    titulo: {
        type: Sequelize.STRING //dessa forma estou informando que o tipo 
    },
    conteudo:{
        type: Sequelize.TEXT
    }
 })

 //Gerar o Model no MySQL
 //Postagem.sync({force:true})//Para confirmar a criação da tabela

 Postagem.create({
    titulo: "Acrescente um titulo",
    conteudo: "Acrescente o conteudo"
 })