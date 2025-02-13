
class ProductoController {
  constructor() {}
  getFormulario(req, res){
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
  }
}

export default new ProductoController();