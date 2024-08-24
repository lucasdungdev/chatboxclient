const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.use(express.static('public'));

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});