const db = require("./db")
const { QueryTypes } = require('sequelize');


const Auth = db.sequelize.define('users', {
    username: {
        type: db.Sequelize.STRING
    },
    password: {
        type: db.Sequelize.STRING
    },
    phone: {
        type: db.Sequelize.STRING
    }
})
console.log("Step 1")


// const cA = Auth.findAndCountAll().then(function(result) {
//     console.log(result);
// })
// console.log("Step 2")
// Auth.sync({force: true})



module.exports = Auth;

