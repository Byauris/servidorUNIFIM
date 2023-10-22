const socket = require('socket.io-client')('http://127.0.0.1:1880/SocketIO_server');

socket.on('mensaje', (data)=>{
    console.log('Mensaje recibido desde node-red', data.mensaje);
});

socket.emit('mensaje', {mensaje:'Hola desde el cliente Socket.IO'});