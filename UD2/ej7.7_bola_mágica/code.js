"use strict";




///////////////////
// FUNCTIONS
//////////////////

/**
 * Devuelve un entero aleatorio entre 0 y el valor del parámetro
 * @param {*} maxSinIncluir 
 * @returns número entero aleatorio
 */
function getRandomInt(maxSinIncluir) {
  return Math.floor(Math.random()*maxSinIncluir) 
}



/**
 * 
 */
function preguntarALaBola(){
  document.querySelector("#ocho").innerText="";
  const resupuesta = document.querySelector("#respuesta");

  const numero = getRandomInt(5);

  if(numero===0){
    resupuesta.innerHTML="No cuentes con ello";
  }
  else if(numero===1){
    resupuesta.innerHTML="Seguro que sí";
  }
  else if(numero===2){
    resupuesta.innerHTML="No parece probable";
  }
  else if(numero===3){
    resupuesta.innerHTML="Por supuesto que sí";
  }
  else if(numero===4){
    resupuesta.innerHTML="Dudo que ocurra";
  }
}




/////////////////
// MAIN
////////////////

// Añadimos un eventListener al botón de la bola
document.querySelector("#btnBola").addEventListener("click", preguntarALaBola);

