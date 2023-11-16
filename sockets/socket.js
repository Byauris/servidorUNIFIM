
const {io} = require('../index');
var count = 0;
io.on('connection', client => {
  console.log('Cliente conectado');
  count++;
  io.emit('web', count);
  
  client.on('disconnect', () => { 
      console.log('Cliente desconectado');
      count--;
      io.emit('web', count);
      
  });
  
  client.on('mensaje', ( payload ) => {
    console.log('MENSAJE!!!', payload);
    io.emit('mensaje', payload);
    // console.log(payload);
    
  });

});