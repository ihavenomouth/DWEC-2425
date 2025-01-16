"use strict";

///////////////
// FUNCTIONS
///////////////



///////////////
// MAIN
///////////////

//1.- Recuperamos los botones
const btnColor = document.querySelector("#btnColor");
const btnCambiarModo = document.querySelector("#btnCambiarModo");

//2.- Al pulsar el botón de cambiar color cambiamos el color de fondo de los botones
btnColor.addEventListener("click", e=>{
  // btnColor.style="background-color:#47adad;";  
  // btnCambiarModo.style="background-color:#47adad;"; 
  
  //Otra opción:
  // document.querySelectorAll("button").forEach(b=>{
  //   b.style.backgroundColor = "#47adad";
  // });

  //Otra opción:
  const arrBotones = document.querySelectorAll("button");
  for(let b of arrBotones){
    b.style.backgroundColor = "#47adad";
  }
});

//3.- Al pulsar sobre el botón de cambiar modo claro/oscuro, cambiamos la hoja de estilos 
btnCambiarModo.addEventListener("click", e=>{
  const themeLink = document.querySelector("#theme-link");
  if( themeLink.getAttribute("href") == "style.css")
    themeLink.href="style-dark.css";
  else
    themeLink.href="style.css";
});
