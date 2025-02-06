// import {nombreAutor as na, saludo, saludoCaracola} from './saludoModulo.js';

// import saludoCar,{saludo} from './saludoModulo.js';

// import * as saludo from './saludoModulo.js';



// import {nombreAutor, saludo} from './saludoModulo.js';

//

// import {saludoCaracola} from './saludoModulo.js';


// saludoCaracola();

// console.log(autor)


const divResultado = document.querySelector("#divResultado");

document.querySelector("#btnAccion").addEventListener("click", async e=>{
  try{
    let moduloSaludo = await import("./saludoModulo.js");
    moduloSaludo.saludo();
  }
  catch(error){
    divResultado.innerHTML = error +" Error al cargar la biblioteca";
  }
  
});










"use strict";

const cargarJS = (url , bibliotecaCargada) => {
  return new Promise(  (resolve, reject) =>{
    // Comprobar si la biblioteca ya está cargada
    if (bibliotecaCargada) {
      resolve();
    } else {
    // Crear el elemento script
    biblio
      var script = document.createElement('script');

      // Asignar la URL de la biblioteca SheetJS al atributo src del elemento script
      script.src = url;

      // Añadir un evento load que resuelve la promesa cuando la biblioteca está cargada
      script.addEventListener('load', resolve);
      script.addEventListener('error', reject);

      // Añadir el elemento script al documento
      document.body.appendChild(script);
    }
  });
}

// Variable cerrojo para saber si se cargó o no la biblioteca
let bibliotecaSaludoCargada = false;


document.querySelector("#btnCargarJS").addEventListener("click", async e=>{
  try{
    await cargarJS("biblioteca.js", bibliotecaSaludoCargada );
    saludo();
    console.info("El autor es "+ autor);
    bibliotecaSaludoCargada = true;
  }
  catch(error){
    console.error("Error al cargar la biblioteca");
  }
});
