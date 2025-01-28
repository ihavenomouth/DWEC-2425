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
  li.style.userSelect = "none"; //evita que se pueda seleccionar el texto
  li.style.cursor = "pointer";

  listaTareas.append(li);

  guardarTareasEnLocalStorage();
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
  guardarTareasEnLocalStorage();
});


// 3.- Añadimos la funcionalidad de guardar las tareas
const guardarTareasEnLocalStorage = () =>{
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
};


//4.- Añadimos la funcionalidad de recuperar las tareas
document.querySelector("#btnRecuperar").addEventListener("click", e=>{
  // Recuperamos el array de tareas almacenado
  const arrTareas = JSON.parse(localStorage.getItem("arrTareas"));
  if(!arrTareas){
    alert("No hay tareas almacenadas");
    return;
  }

  //Eliminamos todos los hijos
  listaTareas.replaceChildren();

  for (let tarea of arrTareas){
    const li = document.createElement("li");
    li.innerText = tarea.texto;
    li.dataset.completada = tarea.completada;
    
    if(tarea.completada == "true"){    
      li.style.textDecoration = "line-through 2px red";
    }

    li.style.userSelect = "none"; //evita que se pueda seleccionar el texto
    li.style.cursor = "pointer";
  
    listaTareas.append(li);
  }
});

