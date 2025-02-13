import express from 'express';
import productoController from '../Controller/ProductoController.js';

const router = express.Router();


//GET desde el formulario con un evento submit
router.get('/add', productoController.getFormulario  );


//POST desde el botón enviando JSON
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



import multer from 'multer';
const upload = multer();

//POST desde el botón enviando FormData
router.post('/addFormDataPOST', upload.none(), (req, res) => {
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