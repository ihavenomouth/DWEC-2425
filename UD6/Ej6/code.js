"use strict";

//////////////
// FUNCTIONS
/////////////

/**
 * Crea una tabla HTML a partir de los datos de una lista añadiéndola al
 * final del documento 
 */
const crearTabla = () =>{
  //Si la tabla ya está creada salimos
  if(tablaAlumnos)
      return;

  // La tabla
  const table = document.createElement("table");
  
  //La cabecera
  const thead = document.createElement("thead");
  const trhead = document.createElement("tr");
  const thNombre = document.createElement("th");
  const thApellido = document.createElement("th");

  thNombre.innerText ="Nombre";
  thApellido.innerText ="Apellido";

  table.append(thead);
  thead.append(trhead);
  trhead.append(thNombre);
  trhead.append(thApellido);

  //El tbody
  const tbody = document.createElement("tbody");
  
  //recorremos los <li> que hay en el <ul class="listaAlumnos"> y añadimos
  //una fila por cada <li>
  for(let liAlumno of listaAlumnos.children){ 
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    td1.innerText = liAlumno.innerText.split(" ")[0];
    td2.innerText = liAlumno.innerText.split(" ")[1];
    tr.append(td1,td2);
    tbody.append(tr);
  }

  //Añadimos el tbody a la tabla
  table.append(tbody);

  // Añadimos la tabla al documento
  document.body.append(table);

  //Actualizamos la referencia a la tabla que hemos creado
  if(!tablaAlumnos)
    tablaAlumnos = table;

  //Añadimos el evento delegado a la tabla
  anadirEventoDelegadoTabla();
}



const anadirAlumno = () =>{
  //1.- Recuperamos los datos
  const nombre = document.querySelector("#txtNombre").value.trim();
  const apellido = document.querySelector("#txtApellido").value.trim();
  
  if(!nombre || ! apellido){
    alert("Debe rellenar el nombre y el primer apellido del alumno");
    return;
  }

  //2.- Recuperamos el valor del checkbox
  const alFinal = document.querySelector("#chkAlFinal").checked;

  //3.- Se generan el li
  const li = document.createElement("li");
  li.innerText = `${nombre} ${apellido}`;

  let tr;
  if(tablaAlumnos){
    tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    td1.innerText = nombre;
    td2.innerText = apellido;
    tr.append(td1,td2);
  }
  //4.- Dependiendo del valor de alFinal se añaden al principio o al 
  // final de la lista (y de la tabla si extiste)
  if(alFinal){
    listaAlumnos.append(li);
    if(tablaAlumnos){
      tablaAlumnos.lastElementChild.append(tr);
    }
  }
  else{
    listaAlumnos.prepend(li);
    if(tablaAlumnos){
      tablaAlumnos.lastElementChild.prepend(tr);
    }
  }
}



const anadirEventoDelegadoTabla = () =>{
  // Evento delegado de la tabla
  if(tablaAlumnos){
    tablaAlumnos.addEventListener("click", e=>{
      if(e.target.tagName=="TD"){
        //tablaAlumnos.lastElementChild es el tbody de la tabla
        tablaAlumnos.lastElementChild.prepend(e.target.parentElement);
      }
      else if(e.target.tagName=="TR"){
        tablaAlumnos.lastElementChild.prepend(e.target);
      }
    });
  }
}


/////////////////////
// MAIN
/////////////////////
let tablaAlumnos; // variable que contendrá una referencia a la tabla

const listaAlumnos = document.querySelector(".listaAlumnos");
document.querySelector("#btnCreartabla").addEventListener("click", crearTabla);

document.querySelector("#btnAnadirAlumno").addEventListener("click", anadirAlumno);

// Evento delegado de la lista
listaAlumnos.addEventListener("click", e=>{
  if(e.target.tagName=="LI"){
    listaAlumnos.prepend(e.target);
  }
});



