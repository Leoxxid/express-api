const express = require('express');
const cors =  require('cors')
const mongoose = require('mongoose');
const requireDir = require('require-dir')

// Iniciando o app
const app = express();
app.user('cors')
app.use(express.json());

// Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true, useUnifiedTopology: true });
requireDir("./src/models");

app.use('/api', require('./src/routes'))

app.listen(3000);