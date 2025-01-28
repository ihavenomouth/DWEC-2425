"use strict";


//////////////////////
// FUNCTION
//////////////////////

const gestionarClickParrafo = e =>{
  //1.- Si no se ha pulsado sobre un párrafo, salimos sin hacer nada
  if(e.target.tagName != "P") return;

  //2.- Recuperamos el párrafo
  const p = e.target;

  //3.- Recuperamos el valor del checkbox
  const arriba = document.querySelector("#chkArriba").checked;

  //4.- Si hay que mover el párrafo arriba
  if(arriba){
    //Recuperamos el hermano anterior
    const previousSibling = p.previousSibling;
    //Si ya es el primero, no hace falta que hagamos nada
    if(!previousSibling)return;
    //Si el párrafo p no es el primero hay que subirlo
    divListado.insertBefore( p, previousSibling );
  }
  //5.- Si hay que mover el párrago hacia abajo
  else{
    //Recuperamos el hermano siguiente
    const nextSibling = p.nextSibling;
    //Si ya es el primero, no hace falta que hagamos nada
    if(!nextSibling)return;
    //Si el párrafo p no es el primero hay que subirlo
    divListado.insertBefore( nextSibling, p  );
  }
}


//////////////////////
// MAIN
//////////////////////

const divListado = document.querySelector("#listado");


//1.- La funcionalidad del botón de añadir 
document.querySelector("#btnAnadir").addEventListener("click", e=>{
  const dato = document.querySelector("#txtDato").value.trim();
  if(!dato) return;

  //Creamos el párrafo y lo añadimos a la división
  const p = document.createElement("p");
  p.innerText = dato;
  divListado.append(p);
});

//2.- La funcionalidad de pulsar sobre algún párrafo se hará con un
//    evento delegado
divListado.addEventListener("click", gestionarClickParrafo);

//3.- Añadimos o quitamos la clase .norte a la división cuando se
//    pulsa sobre el checkbox
document.querySelector("#chkArriba").addEventListener("click", e=>{
  divListado.classList.toggle("norte");
});