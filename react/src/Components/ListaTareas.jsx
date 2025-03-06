/* eslint-disable react/prop-types */
import { useState, useRef } from "react";

const ListaTareas = ({children})=>{

    const [arrTareas, setArrTareas] = useState([]);
    const refIntput = useRef();

    function anadirTarea(){
      const texto = refIntput.current.value.trim();
      if(!texto) return;

      const nuevaTarea={
        id: Date.now(),
        tarea: texto,
        urgencia: "baja"
      }

      setArrTareas(  [...arrTareas, nuevaTarea]  );

    }

    function eliminarTarea(id){
      const nuevoArray = arrTareas.filter( t=>t.id!=id);
      setArrTareas( nuevoArray ); 
    }


    return(<section className="mt-8 p-8">
      {children}
      
      <input ref={refIntput} type="text"  className="outline-red-500 outline-1 mr-2"/>

      <button onClick={anadirTarea}  className="bg-red-500 py-1 px-2 cursor-pointer hover:bg-red-400 active:scale-95">Añadir Tarea</button>

      <ul className="list-disc pl-8">
        {
          arrTareas.map( t=>{
            return (
              <li key={t.id} onClick={()=>eliminarTarea(t.id)}>{t.tarea} - Urgencia {t.urgencia}</li>
            )})
        } 
      </ul>

    </section>)
}

export default ListaTareas;