"use strict";



document.querySelector("#btnCalcular").addEventListener("click", async e=>{
  try{
    let moduloSaludo = await import("./temperatura.js");
    const temperatura = document.querySelector("#temperatura");
    const divResultado = document.querySelector("#resultado");
    const valor = temperatura.value;

    divResultado.innerHTML =`
      <p>${valor} ºC a ºF: ${moduloSaludo.celsiusAFahrenheit(valor)}</p>
      <p>${valor} ºF a ºC: ${moduloSaludo.fahrenheitACelsius(valor)}</p>
      <p>${valor} ºC a K: ${moduloSaludo.celsiusAKelvin(valor)}</p>
    `;
  }
  catch(error){
    divResultado.innerHTML = error +" Error al cargar la biblioteca";
  }

});