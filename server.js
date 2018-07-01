// require npm express package
const express = require('express');

// start the server
const app = express();
// app.listen(3000);
//
// to do a get request with express.
//  using the root path /
app.get('/', (req, res) =>{
  res.send('testest');
});
//
app.listen(3000);
//
//  method.... get post put delete