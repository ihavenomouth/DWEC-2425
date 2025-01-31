"use strict";

///////////////////
// FUNCTION
////////////////////
/**
* Crea una tabla HTML a partir de los datos de un array de datos
*/
const crearTabla = (arrDatos) =>{

  //Si la tabla ya está creada salimos o la eliminamos
  const tabla = document.querySelector("#tabla")
  if(tabla) tabla.remove();

  // La tabla
  const table = document.createElement("table");
  table.id = "tabla";

  //La cabecera
  const thead = document.createElement("thead");
  const trhead = document.createElement("tr");
  const th1 = document.createElement("th");
  const th2 = document.createElement("th");
  const th3 = document.createElement("th");
  const th4 = document.createElement("th");
  const th5 = document.createElement("th");

  th1.innerText ="Año";
  th2.innerText ="Marca";
  th3.innerText ="Modelo";
  th4.innerText ="Descripción";
  th5.innerText ="Precio";

  table.append(thead);
  thead.append(trhead);
  trhead.append(th1, th2, th3, th4, th5);

  //El tbody
  const tbody = document.createElement("tbody");

  //recorremos el array de datos añadimos una fila por cada elemento
  let fila = 0;
  for(let dato of arrDatos){ 
    if(fila==0){fila++;continue}
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const td4 = document.createElement("td");
    const td5 = document.createElement("td");
    td1.innerText = dato.split(",")[0];
    td2.innerText = dato.split(",")[1];
    td3.innerText = dato.split(",")[2];
    td4.innerText = dato.split(",")[3];
    td5.innerText = dato.split(",")[4];
    tr.append(td1,td2,td3,td4,td5);
    tbody.append(tr);
  }

  //Añadimos el tbody a la tabla
  table.append(tbody);

  // Actualizamos la referencia a la tabla que hemos creado
  // if(!tablaAlumnos)
  //   tablaAlumnos = table; 

  // Añadimos el evento delegado a la tabla
  // anadirEventoDelegadoTabla(table);

  // Añadimos la tabla al documento o la devolvemos
  // document.body.append(table);
  return table;
}


const tratarDatos = (datos) =>{
  const tabla = crearTabla( datos.split("\n") );
  divResultado.append(tabla);
}


const leerCSV = async (url, callback) =>{
  // try{
  //   const response = await fetch(url, {});
    
  //   if(!response.ok){
  //     throw new Error("No se pudo recuperar el recurso");
  //   }

  //   const datos = await response.text();//json()
  //   // Si llego aquí es que pude recuperar el recurso

  //   callback(datos);
  // }
  // catch(error){
  //   console.error(error);
  // }

  fetch(url)
  .then( response => {
    if(!response.ok)
      throw(new Error("No se pudo recuperar el recurso"));
    return response.text() 
  })
  .then( datos => callback(datos) )
  .catch( error => console.error(error ))

}



///////////////////
// MAIN
////////////////////

const divResultado = document.querySelector("#divResultado");

document.querySelector("#btnLeerCSV").addEventListener("click", e=>{
  leerCSV("datos.cs", tratarDatos);
});

