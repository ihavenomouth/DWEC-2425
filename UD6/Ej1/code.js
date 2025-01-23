"use strict";


document.querySelector("#btnDOM").addEventListener("click", e=>{

  //1.- Rcuperamos el elemento
  const div = document.querySelector("#resultado");

  //2.- Cambiamos el texto del párrafo (recuperamos el hijo elemento, no el hijo nodo)
  div.firstElementChild.innerText="Lista de animales";

  //3.- El último elemento de la lista será "Lobo"
  div.firstElementChild
    .nextElementSibling
    .lastElementChild.innerText = "Lobo";
  
  //4.- El texto en negrita será "de agua" 
  div.firstElementChild
    .nextElementSibling
    .lastElementChild
    .previousElementSibling
    .firstElementChild.innerText = "de agua";

  //5.- Mostramos en un alert el último texto
  alert(div.lastChild.textContent);
})