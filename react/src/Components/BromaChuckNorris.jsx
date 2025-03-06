
import { useEffect, useState } from "react";

function BromaChuckNorris(){

  const [broma, setBroma]=useState("");
  const [numBroma, setNumBroma]=useState(1);
  
  useEffect( ()=>{cargarBroma();},
  [numBroma]);
  

  const cargarBroma = async () => {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    const chiste = await response.json();
    setBroma(chiste.value);
  }

  return(<>
  <h2 className="text-2xl">Broma de Chuck Norris</h2>
  <p>{broma}</p>
  <p>Nº de bromas leídas: {numBroma}</p>
  <button className="border-2" onClick={()=>setNumBroma(numBroma+1)}>Siguiente broma</button>

  </>);
}

export default BromaChuckNorris;