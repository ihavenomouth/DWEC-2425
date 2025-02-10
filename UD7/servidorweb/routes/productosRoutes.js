import express from 'express';

const router = express.Router();


//GET desde el formulario con un evento submit
router.get('/add', (req, res) => {
  //Recuperamos los datos desde la petición
  const txtDato = req.query.txtDato;
  const sltValor = req.query.sltValor;
  const chkAceptar = req.query.chkAceptar;
  const radio = req.query.radio;

  res.send(`
    <p>Datos recuperados desde GET con submit</p>
    <ul>
      <li>txtDato: ${txtDato}</li>
      <li>sltValor: ${sltValor}</li>
      <li>chkAceptar: ${chkAceptar}</li>
      <li>radio: ${radio}</li>
    </ul>
  `);
})


//POST desde el formulario con un evento submit
router.post('/addJSONPOST', (req, res) => {
  console.log(req.body);

  //Recuperamos los datos desde la petición
  const txtDato = req.body.txtDato;
  const sltValor = req.body.sltValor;
  const chkAceptar = req.body.chkAceptar;
  const radio = req.body.radio;

  res.send(`
    <p>Datos recuperados desde POST con submit</p>
    <ul>
      <li>txtDato: ${txtDato}</li>
      <li>sltValor: ${sltValor}</li>
      <li>chkAceptar: ${chkAceptar}</li>
      <li>radio: ${radio}</li>
    </ul>
  `);
})

// define the about route
router.get('/about', (req, res) => {
  res.send('About birds')
})

export default router;