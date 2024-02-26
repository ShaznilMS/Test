const express = require('express');
const app = express();


const PORT = 3000;

// Função para criar rotas

app.get("/", function(req, res) {
    res.sendFile(__dirname+'/views/index.html');
});

// Função para criar servidor

app.listen(PORT, () => {
    console.log(`Server listening to http://localhost:${PORT} `);
});