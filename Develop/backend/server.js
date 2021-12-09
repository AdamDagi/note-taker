// const { notes } = require('../public/assets/js/index');
const html = require("")
const express = require('express');
const app = express();
const PORT = 3300;

app.get('/', (reg, res) => {
  console.log('string');
  res.send('<h1>Hi there</h1>');
});

app.get('/notes', (req, res) => {
  let results = "test";
  console.log('api notes');
  res.json(results);
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});