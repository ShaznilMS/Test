const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Auth = require("./models/Auth")

const PORT = 3000

// Config
// Templete Engine
app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Rotas
app.get("/", function (req, res) {
    res.render("home")
})

app.get("/list", function(req, res) {
    Auth.all().then(function(auth) {
        res.render("list", {auth: auth})
    })
})

app.get('/register', function (req, res) {
    res.render("register")
})

app.post('/register', function (req, res) {
    Auth.create({
        username: req.body.user,
        phone: req.body.phone,
        password: req.body.pass
    }).then(function () {
        res.redirect("/")
    }).catch(function (erro) {
        res.redirect("/register")
    })
})

app.get('/login', function (req, res) {
    res.render("login")
})


app.post('/login', function (req, res) {
    res.send(req.body.user)
})


// Função para criar servidor

app.listen(PORT, () => {
    console.log(`Server listening to http://localhost:${PORT} `);
});