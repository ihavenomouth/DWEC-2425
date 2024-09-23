"use strict";

////////////////
// FUNCTIONS
////////////////

/**
 * Calcula los divisores de un número devolviéndolos en una cadena de caracteres
 * @param {Number} n 
 * @returns string
 */
function divisores(n){
  let resultado = "";

  for(let i=0;i<n/2+1;i++){
    if( n%i == 0){
      resultado += i + ", ";
    }
  }

  resultado += n;

  return resultado;
}

////////////////
// MAIN
////////////////

// Recuperamos la división donde se van a mostrar los resultados
const divResultado = document.querySelector("#divResultado");

let num = Infinity;

while( num!=0 ){
  num = Number(prompt("Introduzca un número"));
  console.log(num);
  const divs = divisores(num);
  divResultado.innerHTML += `<p>Los divisores de ${num} son: ${divs}<p>`
}