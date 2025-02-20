import './App.css'
import Titulo from './Components/Titulo';
import Saludo from './Components/Saludo';
import Contador from './Components/Contador';
import Conversor1 from './Components/Conversor1';

function App() {

  const apellido = "Mancera";
  return (<>
    <Titulo/>
    <Saludo nombre="Javier" apellido={apellido}/>
    <Contador />
    
    <Conversor1/>

  </>
  );
}

export default App
