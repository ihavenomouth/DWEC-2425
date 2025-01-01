"use strict";




const frmRegistro = document.querySelector("#frmRegistro");
frmRegistro.addEventListener("submit", e=>{
  e.preventDefault();

  // Comprobaciones de validación
  const nombre = frmRegistro.nombre.value.trim();
  if(nombre === ""){
    console.log("No puede dejar vacío el nombre");
    return;
  }

  // .....

  e.target.submit();

})