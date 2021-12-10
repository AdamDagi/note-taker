const express = require('express');
const path = require("path");
const PORT = 3001;
const app = express();
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json();
const notes = [];

app.use(express.urlencoded({ extended: false }));

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, "./public/notes.html"));
});

app.post('/api/notes', jsonParser, (req, res) => {
  const data = req.body;
  data.id = notes.length;
  notes.push(data);
  res.send("ok");
});

app.get('/api/notes', jsonParser, (req, res) => {
  res.send(notes);
});

app.delete('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  notes.splice(id, 1);
  notes.forEach( (note, index)=> {
    note.id = index;
  })
  res.send("ok");
});

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
