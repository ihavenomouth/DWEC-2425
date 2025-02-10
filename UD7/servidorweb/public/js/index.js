"use strict";


// document.querySelector("#btnEnviar").addEventListener("click", e=>{
//   alert("Hola caracola");
// });

const enviarJSONPost = async () =>{
  const txtDato = document.querySelector("#txtDato").value;
  const sltValor = document.querySelector("[name=sltValor]").value;
  const chkAceptar = document.querySelector("#chkAceptar").checked;
  const radio = document.querySelector("[name=radio]").value;
  
  const objetoJSON = {
    txtDato,
    sltValor,
    chkAceptar,
    radio
  };

  try{
    const response = await fetch("/api/producto/addJSONPOST",{
      method: "POST",
      headers: {
        "Content-type" : "application/json"
      },
      body: JSON.stringify(objetoJSON)
    });
    
    if(!response.ok)
      throw new Error("No se pudo realizar la petición");

    const resultado = await response.text();
    divResultado.innerHTML = resultado;

  }
  catch(error){
    divResultado.innerHTML = error;
  }
}


/////////////
// MAIN
////////////
const divResultado = document.querySelector("#divResultado");

document.querySelector("#btnEnviarPOST").addEventListener("click", e=>{
  enviarJSONPost();
});

