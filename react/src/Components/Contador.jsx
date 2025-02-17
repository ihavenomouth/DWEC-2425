import { useRef } from "react";
function Contador(){
  
  const refParrafo = useRef();
  let i = 0;

  function accion(){
    // alert("Pulsado");
    i++;
    console.log(i);
    refParrafo.current.innerText=`Contador: ${i}`;
  }

  return(<>
    <button onClick={accion}>Acción</button>
    <p ref={refParrafo}>Contador: {i}</p>
  </>
  );
}

export default Contador;