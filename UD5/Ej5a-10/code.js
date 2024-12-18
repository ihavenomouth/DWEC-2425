"use strict";

////////////////
// FUNCTION
/////////////////

function tratarDatosNormalizados(textoFichero){
  //1.- Convertimos el texto del fichero en un array de líneas
  let lineasFichero = textoFichero.split("\n");
  //console.log(lineasFichero)
  
  //2.- Eliminamos la primera línea que es la de cabecera
  lineasFichero.shift();

  //3.- Calculamos el mayor
  // El mayor de un array es Math.max( ...[12,34,56,78,56,2])
  const mayor = Math.max( ...lineasFichero.map( d=>d.split(",")[1] )  );
  console.log("El mayor es el "+ mayor);

  //4.- Normalizamos los datos
  const arrDatosNormalizados = lineasFichero.map( d=>d.split(",")[1]/mayor*500 );

  //2.- Borramos la división y generamos el gráfico
  divSolucion2.innerHTML="<h2>Gráfico de barras normalizado</h2>";
  for(let i=0;i< arrDatosNormalizados.length; i++){
    const valor = lineasFichero[i].split(",")[1];
    const valorNormalizado = arrDatosNormalizados[i];
    divSolucion2.innerHTML+=`<p class="barra" style="width:${valorNormalizado}px">${valor}</p>`;
  }

}



//Líneas del fichero:
// Día,Gastos
// lunes,100
// martes,22
function tratarDatos(textoFichero){
  //1.- Convertimos el texto del fichero en un array de líneas
  let lineasFichero=textoFichero.split("\n");
  //console.log(lineasFichero)
  
  //2.- Eliminamos la primera línea que es la de cabecera
  lineasFichero.shift();

  //3.- Borramos la división
  divSolucion.innerHTML="<h2>Gráfico de barras</h2>";
  for(let linea of lineasFichero){
    const valor = linea.split(",")[1];
    divSolucion.innerHTML+=`<p class="barra" style="width:${valor}px">${valor}</p>`;
  }

}


////////////////
// MAIN
/////////////////

const fileInput = document.querySelector("input[type=file]");
const divSolucion = document.querySelector("#divSolucion");
const divSolucion2 = document.querySelector("#divSolucion2");

fileInput.addEventListener("change", async () => {
  const [file] = fileInput.files;

  if (file) {
    const datos = await file.text()
    tratarDatos( datos );
    tratarDatosNormalizados( datos );
  }
});

