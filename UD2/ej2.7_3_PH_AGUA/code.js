"use strict";

//////////////////
// FUNCTION
///////////////////

/*
Crea un código javascript que indique si el agua tiene un ph neutro (entre 6.5 y 8.5), ligeramente alcalino (entre 8.5 y 11), muy alcalino (mayor que 11), ligeramente ácido (entre 3.5 y 6.5) o muy ácido (menor que 3.5). 
*/

function calcularPH(){
  //1.- Recuperamos el valor del PH
  let ph = Number( txtPH.value );

  //2.- Realizamos las comprobaciones
  let resultado;

  if( ph < 3.5 )
    resultado = "Muy ácido";
  else if ( ph > 11 )
    resultado = "Muy alcalino";
  else if ( ph >= 3.5 && ph <= 6.5 )
    resultado = "Ligeramente ácido";
  else if ( ph > 6.5 && ph <= 8.5 )
    resultado = "Neutro";
  else
    resultado = "Ligeramente alcalino";

  //3.- Mostramos el resultado en el navegador
  divResultado.innerHTML = `Un PH de ${ph} se considera ${resultado}`;
}

//////////////////
// MAIN
///////////////////

//1.- Recuperamos las etiquetas que vamos a utilizar
let btnCalcular = document.querySelector("#btnCalcular");
let txtPH = document.querySelector("#txtPH");
let divResultado = document.getElementById("divResultado");

//2.- Asignamos los manejadores de eventos al botón
btnCalcular.addEventListener("click", calcularPH);
