"use strict";

////////////////////////
// FUNCTION
////////////////////////

////////////////////////
// MAIN
////////////////////////

const listaTareas = document.querySelector("#listaTareas");


//1.- Añadimos las tareas a la lista de tareas
document.querySelector("#btnAnadir").addEventListener("click", e=>{
  // Recuperamos el valor de la tarea
  const tarea = document.querySelector("#txtTarea").value.trim();
  if(!tarea) return;

  const li = document.createElement("li");
  li.innerText = tarea;
  li.dataset.completada = "false";

  listaTareas.append(li);
});


//2.- Creamos un evento delegado para que cuando se pulse sobre una
//    tarea se marque como completada
listaTareas.addEventListener("click", e=>{
  if(e.target.tagName == "LI"){
    //Si ya está marcada como completada, se desmarca
    if(e.target.dataset.completada == "true"){
      e.target.dataset.completada = false;
      e.target.style.textDecoration = "";
    }
    else{
      e.target.dataset.completada = true;
      e.target.style.textDecoration = "line-through 2px red";
    }
  }
});

// 3.- Añadimos la funcionalidad de guardar las tareas
document.querySelector("#btnGuardar").addEventListener("click", e=>{
  //Recorremos los <li> de la lista y los guardamos en el localStorage
  const arrTareas = [];

  for(let li of listaTareas.children){
    arrTareas.push( 
      {
        "texto":li.innerText, 
        "completada":li.dataset.completada
      } 
    );
  }
  localStorage.setItem("arrTareas", JSON.stringify(arrTareas));
});

