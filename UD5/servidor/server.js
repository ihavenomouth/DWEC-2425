import express  from 'express';
const app = express()
const port = 3000

import bodyParser from 'body-parser'

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/formulario', (req, res) => {
  console.log(req.query);
  console.log("------");

  res.send(`
    <h1>Recibido en el servidor (GET)</h1>
    <p>¿Con cebolla? ${req.query.radioTortilla}</p>
  `);
})

app.post('/formulario', (req, res) => {
  res.send(`
    <h1>Recibido en el servidor (POST)</h1>
    <p>¿Con cebolla? ${req.body.radioTortilla}</p>
  `);
})

app.use(express.static('.'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
