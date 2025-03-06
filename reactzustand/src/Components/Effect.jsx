import { useState, useEffect } from "react";

const Effect = () =>{

  const [numBroma, setNumBroma] = useState(0);
  const [broma, setBroma] = useState("");
  
  
  useEffect( ()=>{ 
    cargarBroma();
  },
  [numBroma]);


  const cargarBroma = async()=>{
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await response.json();
    setBroma(data.value);
  }

  const handleClick = ()=>{
    setNumBroma(numBroma+1);
  }


  //https://picsum.photos/id/54/100/100


  return(<>
  <h2>Imagen recuperada</h2>
  <input type="text" defaultValue="1" />
  <button onClick={handleClick}>Siguiente</button>
  <p>Broma: {broma}</p>
  <p>Nº de broma: {numBroma}</p>
  </>);
}

export default Effect;

