"use strict";

const removeLI = e => {
  e.target.remove();
}

const removeLILista = e => {
  // if(e.target !== lista)
  //   e.target.remove();
  
  //Otra manera
  console.log(e.target.tagName);
  if( e.target.tagName == "LI")
    e.target.remove();
}


/**
 * Añade un elemento <li> a la lista
 * @param {Event} e - Datos del evento 
 */
const anadirLi = e =>{
  const texto = txtNuevoElemento.value
  if(texto){
    let li = document.createElement("li");
    li.innerText = texto;
    lista.appendChild(li);
    // li.addEventListener("click", removeLI);
    // lista.innerHTML += `<li>${texto}</li>`;
  }
}

///////
// MAIN
///////

// 1.- Recuperamos los elementos que vamos a necesitar
const lista = document.querySelector("#lista");
const txtNuevoElemento = document.querySelector("#txtNuevoElemento");
const btnAnadir = document.querySelector("#btnAnadir");

//2.- Añadimos el eventListener al botón
btnAnadir.addEventListener("click", anadirLi);

//3.- Añadimos el eventListener delegado a la lista
lista.addEventListener("click", removeLILista)

