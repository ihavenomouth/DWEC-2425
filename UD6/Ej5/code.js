"use strict";

//////////////
// FUNCTIONS
/////////////
const crearTabla = (arrAlumnos) =>{
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

  //El body
  const tbody = document.createElement("tbody");
  for(let alumno of arrAlumnos){
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    td1.innerText = alumno[0];
    td2.innerText = alumno[1];
    tr.append(td1,td2);
    tbody.append(tr);
  }

  //Añadimos el tbody a la tabla
  table.append(tbody);

  // Añadimos la tabla al documento
  document.body.append(table);
}




//////////////
// MAIN
/////////////

//1.- Creamos la tabla
const arrAlumnos = [
  ["Tomás", "Tuerzo"],
  ["Aitor", "Tilla"],
  ["Sara ","Mago"],
  ["Pancho","Colate"],
  ["Ana","Tema"],
  ["Armando","Bronca"],
  ["Aitor", "Menta"],
];

crearTabla(arrAlumnos);





// 2.- Cuando se pulse sobre el botón de Ordenar, se ordenará
document.querySelector("#btnOrdenar").addEventListener("click", e=>{
  //Seleccionamos el tbody
  let tbody = document.querySelector("table tbody");

  // Creamos un array de los hijos del tbody para poder usar el toSorted()
  Array.from(tbody.children).toSorted( 
    (f1,f2) => f1.children[0].innerText>f2.children[0].innerText)
    .forEach(fila => {
        tbody.appendChild(fila);
    });
});






//3.- Filtramos la tabla para que aparezcan sólo los alumnos cuyo
//    nombre empiece por lo que haya en el textbox
document.querySelector("#btnFiltrar").addEventListener("click", e=>{
  //1.- Seleccionamos el tbody y recuperamos el filtro
  let tbody = document.querySelector("table tbody");
  const filtro = document.querySelector("#txtFiltrar").value;

  if(!filtro){ //si no se indicó nada para filtrar, salimos de la función
    return;
  }

  //2.- Convertimos el HTMLCollection con las filas del tbody en un Array
  //    y usamos el método filter para quedarnos sólo con las filas que cumplan
  //    el filtro
  let filas = Array.from(tbody.children).filter( fila =>{
    //el primer hijo de la fila <tr> es el primer <td> 
    return fila.firstElementChild.innerText.startsWith(filtro)
  });

  // console.log(filas);

  //3.- Eliminamos todas las filas del tbody

  // Nota: las recorremos desde el final hasta el principio para no tener
  // problemas con los índices al eliminarlos
  //  for(let i=tbody.children.length;i>0;i--){
  //    tbody.children[i-1].remove()
  //  }
  
  //Otra manera de eliminar los hijos del tbody:
  //while (tbody.firstChild) {
  //  tbody.removeChild(tabla.firstChild);
  //}

  //Otra manera más de eleiminarlas:
  //const filas = tabla.querySelectorAll('tr');
  //filas.forEach(fila => fila.remove());

  //Otra manera:
  //tbody.replaceChildren();

  // Otra solución para eliminar las filas del tbody: eliminar el tbody, crear 
  // uno nuevo (vacío) y añadirlo a la tabla 
  tbody.remove();
  tbody = document.createElement("tbody");
  const table = document.querySelector("table"); // recuperamos nuestra tabla
  table.append(tbody);

  //4.- Añadimos sólo las filas que cumplen el filtro
  filas.forEach(fila => {
    tbody.appendChild(fila);
  });
});
