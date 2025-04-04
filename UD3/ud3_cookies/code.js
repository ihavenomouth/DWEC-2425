"use strict";


///////////////
// MAIN
////////////////
document.querySelector("#btnCambiarColor").addEventListener("click", e=>{
  //1.- Recuperamos el color
  const slColor = document.querySelector("#slColor");
  const color = slColor.value;
  // alert(slColor.value);

  //2.- Cambiamos el color del documento
  document.body.style.backgroundColor=color;

  //3.- Creamos la cookie
  document.cookie = `colorFondo=${color}; SameSite=Strict;`;

});


let colorFondo =  document.cookie.replace(
  /(?:(?:^|.*;\s*)colorFondo\s*\=\s*([^;]*).*$)|^.*$/,
  "$1",
);

if(colorFondo){
  document.body.style.backgroundColor=colorFondo;
}