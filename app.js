const express = require('express');
const path = require('path');
const cors = require('cors');

// const Server = require('http').Server;
const app = express();

const port = 3001;
app.use(cors());
app.use(express.static(path.join(__dirname, '/dist')));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist'));
});

app.use((request, response, next) => {
  response.header('Access-Control-Allow-Origin', '*');
  // response.header('Access-Control-Allow-Credentials', true);
  response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  response.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

app.listen(port, () => {
  console.log(`listening on *:${port}`);
});
