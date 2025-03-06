import './App.css'
// import Titulo from './Components/Titulo';
// import Saludo from './Components/Saludo';
// import Contador from './Components/Contador';
// import Effect from './Components/Effect';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';



function App() {

  // const apellido = "Mancera";
  return (<>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </BrowserRouter>

  </>
  );
}

export default App
