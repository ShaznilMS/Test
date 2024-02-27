const Sequelize = require('sequelize');
const sequelize = new Sequelize('uniquedti', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql'
});

// sequelize.authenticate().then(function () {
//     console.log("Conectado com sucesso!");
// }).catch(function (erro) {
//     console.log("Falha ao conetar: "+ erro);
// });

const uuids = sequelize.define('uuids', {
    username: {
        type: Sequelize.STRING
    },
    userid: {
        type: Sequelize.TEXT
    }
});

// uuids.sync({force: true});


uuids.create({
    username: "ShaznilMS",
    userid: "E86C2F3CBF7D41F084A3FA40EC550503756B3CB4FE75CE2920FE07C91DA6807A"
})