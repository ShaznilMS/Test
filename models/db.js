const Sequelize = require('sequelize');
// Connect to database
const sequelize = new Sequelize('uniqueapp', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}