const express = require('express');
const handlebars  = require('express-handlebars');
const app = express();
const Sequelize = require('sequelize');

const PORT = 3000

// Config
    // Templete Engine
        app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
        app.set('view engine', 'handlebars');
    // Database Connection
        const sequelize = new Sequelize('uniquedti', 'root', '123456', {
            host: 'localhost',
            dialect: 'mysql'
        });

// Rotas
app.get('/home', function (req, res) {
    res.render("form");
})


// Função para criar servidor

app.listen(PORT, () => {
    console.log(`Server listening to http://localhost:${PORT} `);
});