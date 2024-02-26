const express = require('express');
const app = express();


const PORT = 3000;

// Função para criar rotas

app.get("/", function(req, res) {
    res.sendFile(__dirname+'/views/home.html');
});app.get("/login", function(req, res) {
    res.sendFile(__dirname+'/views/login.html');
});
app.get("/register", function(req, res) {
    res.sendFile(__dirname+'/views/register.html');
});

// Função para criar servidor

app.listen(PORT, () => {
    console.log(`Server listening to http://localhost:${PORT} `);
});