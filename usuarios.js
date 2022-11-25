const Sequelize = require('sequelize')
const sequelize = new Sequelize ('cad_senac', 'root', '123456',{
    host: "localhost",
    dialect: "mysql"
})
 
 const Usuario = sequelize.define('users',{
   nome: {
        type: Sequelize.STRING //dessa forma estou informando que o tipo 
    },
    sobrenome:{
        type: Sequelize.STRING
    },

    idade: {
        type: Sequelize.INTEGER
    },

    email: {
        type: Sequelize.STRING
    }

 })

 //Gerar o Model no MySQL
 //Usuario.sync({force:true})//Para confirmar a criação da tabela

Usuario.create ({
        nome: "Elvis",
        sobrenome:"Presley",
        idade: 30,
        email:"elvis@senac.com.br"
});

Usuario.create ({nome: "Cleriston",
        sobrenome:"DevOps",
        idade: 29,
        email:"cleriston@senac.com.br"
});

Usuario.create ({
        nome: "Hamilton",
        sobrenome:"Mourão",
        idade:20,
        email:"hamilton@senac.com.br"
});
Usuario.create ({
        nome: "Geraldo",
        sobrenome:"Júlio",
        idade:42,
        email:"geraldo@senac.com.br"
    });
    Usuario.create ({
        nome: "Felipe",
        sobrenome:"Dylon",
        idade:39,
        email:"felipe@senac.com.br"
    });

    Usuario.create ({
        nome: "Karla",
        sobrenome:"Rebeka",
        idade:39,
        email:"karla@senac.com.br"
});