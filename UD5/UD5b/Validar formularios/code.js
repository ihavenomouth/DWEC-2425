"use strict";

///////////////
// FUNCTIONS
/////////////////

const enviarDatos = e =>{
  document.querySelector("#divErrores").innerHTML="";

  const frmEnviar = document.querySelector("#frmEnviar");

  let fallos = [];
  for(let control of frmEnviar.elements){
    if(! control.checkValidity() ){
      if(control.id === "txtNombre"){
        fallos.push("<p>Error, el nombre debe comenzar por una vocal seguida de números</p>");
      }
      else if(control.id === "txtEdad"){
        fallos.push("<p>Error, la edad debe ser un número entre 18 y 60</p>");
      }
      else if(control.id === "txtDato"){
        fallos.push("<p>Error, el dato debe estar relleno</p>");
      }
    }
  }

  // Comprobaciones adicionales

  document.querySelector("#divErrores").innerHTML=fallos.join("\n");

}



///////////////
// MAIN
/////////////////

const btnEnviar  = document.querySelector("#btnEnviar");
btnEnviar.addEventListener("click", enviarDatos)