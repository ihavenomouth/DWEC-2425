import { useState } from "react";

function Conversor2 (){

  const [km, setKm] = useState(0);

  function convertir(e){
      const valor = e.target.value;
      setKm(valor);
  }

  return(<>
    <p>Conversor de Km a metros usando estados</p>
    <input type="number" onInput={convertir}/>
    <p>{km} km son {km * 1000} metros.</p>
  </>);
}

export default Conversor2;