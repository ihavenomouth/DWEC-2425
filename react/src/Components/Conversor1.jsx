import { useRef } from "react";

function Conversor1(){

  const refParrafo = useRef();

  function convertir(e){
    const valor=e.target.value;
    console.log(valor);
    refParrafo.current.innerText = `${valor} Km son ${valor*1000} metros.`
  }

  return (<>
    <p>Conversor de Kilómetros a metros.</p>
    <input type="number" onInput={convertir}/ >
    <p ref={refParrafo}>0 Kms son 0 metros.</p>
  </>);
}

export default Conversor1;