"use strict";

// alert("Hola");

////////////////
// FUNCTIONS
////////////////


////////////////
// MAIN
////////////////
const divTexto = document.querySelector("#divTexto");

divTexto.addEventListener("contextmenu", function(e){
  e.preventDefault();
  document.querySelector(".menu").classList.toggle("oculto");
});


document.querySelector("#btnCursiva").addEventListener("click", e=>{
  document.querySelector("#pTexto").classList.toggle("cursiva");
  document.querySelector(".menu").classList.add("oculto");
});


document.querySelector("#btnNegrita").addEventListener("click", e=>{
  document.querySelector("#pTexto").classList.toggle("negrita");
  document.querySelector(".menu").classList.add("oculto");
});

