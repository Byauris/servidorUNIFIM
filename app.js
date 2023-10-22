
const express = require('express')
const app = express()
const port = 8080;

app.get('/', (req, res) => {
  res.send('Hola Mundo')
});

app.get('/ruta2', (req, res) => {
    res.send('Hola Mundo en pagina 2')
  });

app.get('*', (req, res) => {
    res.send('404 | Page not found')
});

app.listen(port, () =>{
    console.log(`app de ejemplo corriendo en el puerto http://localhost:${port}`)
})

// app.listen(8080)



