/* eslint-disable react/prop-types */
import { useState, useRef } from "react";

const ListaTareas = ({children})=>{

  let [iEstado,setIEstado] = useState(0); //con useState, react agrupa los rerenderizados, así que no sufriremos por esto y formará parte del estado, así que será fácilmente usable por otros componentes.
  const i = useRef(0); //Alternativa con useRef, no provocará nunca rerenderizados ante cambios de su valor. En este caso simple es suficiente

  const [arrTareas, setArrTareas] = useState([]);
  const refIntput = useRef();

  function anadirTarea(){
    const texto = refIntput.current.value.trim();
    if(!texto) return;
    i.current++; //incrementamos i
    setIEstado(iEstado+1);
    const nuevaTarea={
      id: i.current,//iEstado,//Date.now(), //crypto.randomUUID()
      tarea: texto,
      urgencia: "baja"
    }

    setArrTareas(  [...arrTareas, nuevaTarea]  );

  }


  const eliminarTarea=(e)=>{
    if(e.target.tagName!="LI") return;
    const idEliminar = e.target.dataset.id;
    setArrTareas(  arrTareas.filter(t=>t.id!=idEliminar) )
  }


  //TODO: mostrar el número de tareas
  return(<section className="mt-8 p-8">
    {children}
    <input ref={refIntput} type="text"  className="outline-red-500 outline-1 mr-2"/>
    <button onClick={anadirTarea}  className="bg-red-500 py-1 px-2 cursor-pointer hover:bg-red-400 active:scale-95">Añadir Tarea</button>

    <ul onClick={eliminarTarea} className="list-disc pl-8">
      {
        arrTareas.map( t=>{
          return (
            <li key={t.id} data-id={t.id}>{t.tarea} - Urgencia {t.urgencia} - {t.id}</li>
          )})
      } 
    </ul>

  </section>)
}

export default ListaTareas;