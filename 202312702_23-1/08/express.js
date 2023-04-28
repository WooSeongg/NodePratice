const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Main Page');
});

app.get('/login', (req, res) => {
  res.send('Login page');
});

app.get('/uesr', (req, res) => {
    res.send('User page');
  });

app.listen(8080, () => {
  console.log('Server is listening on port 8080');
});