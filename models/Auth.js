const db = require("./db")

const Auth = db.sequelize.define('users', {
    username: {
        type: db.Sequelize.STRING
    },
    usermail: {
        type: db.Sequelize.STRING
    },
    phone: {
        type: db.Sequelize.INTEGER
    }
})

// Auth.sync({force: true})

module.exports = Auth;

