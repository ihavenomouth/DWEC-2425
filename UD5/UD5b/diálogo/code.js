"use strict";

const dialogo = document.querySelector("#dialogo");

document.querySelector("#btnMostrar").addEventListener('click', ()=>{
  dialogo.showModal();
});

document.querySelector("#btnCerrar").addEventListener("click", e=>{
  dialogo.close();
})

dialogo.addEventListener("click", e=>{
  if(e.target.tagName=="DIALOG")
    dialogo.close();
})
