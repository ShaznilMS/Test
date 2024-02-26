const express = require('express');
const app = express();


const PORT = 3030;

// Função para criar rotas

app.get("/", function(req, res) {
    res.send("Seja bem vindo!");
});
app.get("/login", function(req, res) {
    res.send("Página de login");
});
app.get("/register", function(req, res) {
    res.send("Página de registro");
});
app.get("/criar/:nome/:profissao", function(req, res) {
    res.send("<h1 style='font-family: sans-serif;'>Olá " + req.params.nome + "</h1><h2 style='font-family: sans-serif;'>Você é: " + req.params.profissao);
});



// Função para criar servidor

app.listen(PORT, () => {
    console.log(`Server listening to http://localhost:${PORT} `);
});