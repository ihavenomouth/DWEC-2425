import './App.css'
import Titulo from './Components/Titulo';
import ListaTareas from './Components/ListaTareas';

function App() {

  return (<>
    <Titulo/>
    <ListaTareas>
      <p>Intentado crear una lista de tareas con React.</p>
      <p>Esto son hijos de la lista de tareas.</p>
    </ListaTareas>
  </>
  );
}

export default App
