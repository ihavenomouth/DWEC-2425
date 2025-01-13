"use strict";


/////////////////////////////////////////
// Ejercicio 5a-3
/////////////////////////////////////////

///////////////////
// FUNCTIONS
///////////////////
const caraTriste = e => {e.target.innerText="🙁";}
const caraMolesta = e => {e.target.innerText="😒";}
const caraSonriente = e => {e.preventDefault();e.target.innerText="😀";}

///////////////////
// MAIN
///////////////////

// 1.- Recuperamos los elementos que vamos a necesitar
const emoji = document.querySelector("#emoji");

emoji.addEventListener("click", caraTriste);
emoji.addEventListener("dblclick", caraMolesta);
emoji.addEventListener("contextmenu", caraSonriente);


/////////////////////////////////////////
// Ejercicio 5a-4
/////////////////////////////////////////
const divDatos = document.querySelector("#divDatos");

document.addEventListener("keyup", e=>{
  if(e.key == "a"){
    // alert("Javier");
    divDatos.innerText="Javier";
  }
  else if(e.key == "e"){
    // alert("43");
    divDatos.innerText="43";
  }
  else{
    divDatos.innerText="";
  }
});