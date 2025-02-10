import express from 'express';



const app = express();
const port = 3000;

// Middleware para parsear el cuerpo de las solicitudes como JSON
app.use(express.json());

// RUTAS ESTÁTICAS
app.use(express.static('public'));


/// RUTAS
import enrutadorProducto from './routes/productosRoutes.js';
app.use('/api/producto', enrutadorProducto)



app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
