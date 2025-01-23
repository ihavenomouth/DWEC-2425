"use strict";


document.querySelector("#btnDOM").addEventListener("click", e=>{

  //1.- Rcuperamos el elemento
  const strong = document.querySelector("#resultado");

  //2.- Cambiamos el texto del párrafo (recuperamos el hijo elemento, no el hijo nodo)
  strong.parentElement.parentElement.previousElementSibling.innerText="Lista de animales";

  //3.- El último elemento de la lista será "Lobo"
  strong.parentElement
    .nextElementSibling.innerText = "Lobo";
  
  //4.- El texto en negrita será "de agua" 
  strong.innerText = "de agua";

  //5.- Mostramos en un alert el último texto
  alert(strong.parentElement.parentElement.parentElement.lastChild.textContent);
})