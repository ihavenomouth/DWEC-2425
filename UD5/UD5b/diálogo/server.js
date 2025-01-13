import express from 'express';

const app = express()
const port = 3000


app.use(express.static('.'))

app.get('/formulario', (req, res) => {
  const valor = req.query.radioTortilla;
  res.send(`<h1>GET</H1><p>Servidor: ${valor}</p>`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
