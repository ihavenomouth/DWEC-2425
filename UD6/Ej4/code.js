"use strict";

///////////////
// FUNCTION
///////////////

///////////////
// MAIN
///////////////

// 1.- Recuperamos las etiquetas de las listas
const listaAlumnos = document.querySelector("#listaAlumnos");
const listaSuspensos = document.querySelector("#listaSuspensos");
const listaAprobados = document.querySelector("#listaAprobados");

// 2.- La funcionalidad de la lista de alumnos
listaAlumnos.addEventListener("click", e=>{
    if( e.target.tagName == "LI" ){
      const li = e.target;
      const estado = document.querySelector("[name=radioSuspenso]:checked").value;

      if(estado ==="suspenso"){
        listaSuspensos.append(li);
      } 
      else{
        listaAprobados.append(li);
      }
    }
  });

// 3.- La funcionalidad de la lista de aprobados y suspensos

listaSuspensos.addEventListener("click", e=>{
  if( e.target.tagName == "LI" ){
    const li = e.target;
    listaAlumnos.append(li);
  }
});

listaAprobados.addEventListener("click", e=>{
  if( e.target.tagName == "LI" ){
    const li = e.target;
    listaAlumnos.append(li);
  }
});