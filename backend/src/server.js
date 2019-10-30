const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const path = require('path');

mongoose.connect('mongodb+srv://Samuel:samuel@myappomni-7yoss.mongodb.net/MyAppNode?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

//GET, POS, PUT, DELETE

// req.query = acessar query params (filtros)
// req.params = acessar route params (para ediçao , delete)
// req.body = acessar corpo da requisiçao(criaçao, ediçao)

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')))
app.use(routes);
app.listen(3333);

