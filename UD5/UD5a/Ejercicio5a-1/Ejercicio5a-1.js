"use strict";

// alert("Hola");

////////////////
// FUNCTIONS
////////////////


////////////////
// MAIN
////////////////

//1.- Recuperamos todos los radio buttons con el nombre "txtOpcion"
const inputs = document.querySelectorAll("[name=txtOpcion]");

//2.- Los recorremos agregando un eventListener para el evento "change" a cada uno de ellos
for(let i of inputs) {
  i.addEventListener("change", ()=> {
    if(i.value =="animales"){
      document.querySelector("#divSolucion").innerHTML = "Zorro, perro, gato";
    }
    else{
      document.querySelector("#divSolucion").innerHTML = "Rojo, verde, azul";
    }
  });
}
