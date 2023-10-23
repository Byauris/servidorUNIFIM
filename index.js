const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const port = process.env.PORT;
//app de express
const app = express();
app.use(cors());

//node Server
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);

require('./sockets/socket');


// Path publico
const publicPath = path.resolve(__dirname, 'public');

app.use(express.static(publicPath));

server.listen(port, (err) => {
    if (err) throw new Error(err);
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`)
})



