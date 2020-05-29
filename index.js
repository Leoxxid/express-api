const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir')

// Iniciando o app
const app = express();

// Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true, useUnifiedTopology: true });
requireDir("./src/models");

const Product = mongoose.model('Product')

app.get('/', (req, res) =>{
  Product.create({
    title: 'API', 
    description: 'Build first express api', 
    url: 'github.com',
  })
  res.send('Hellow Leonardoo')
});

app.listen(3000);