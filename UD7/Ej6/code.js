"use strict";

///////////////////////
// FUNCTION
//////////////////////

/**
 * Crear una tabla a partir del objeto json que recibe
 * @param {Object} json - Un Array de usuarios(id, name, username...) 
 */
const crearTabla = json =>{
  const table = document.querySelector("#tabla");

  let s=`<thead><tr>
    <th>Username</th>
    <th>E-mail</th>
    <th>Web</th>
    <th>Ciudad</th>
  </tr></thead><tbody>`;
  for (let usuario of json){
    s+=`<tr data-id="${usuario.id}">
    <td>${usuario.username}</td>
    <td>${usuario.email}</td>
    <td>${usuario.website}</td>
    <td>${usuario.address.city}</td>
    </tr>`;
  }
  s+="</tbody>";
  table.innerHTML = s;
  table.addEventListener("click", eventoTablaDelegado);
}


const eventoTablaDelegado = e =>{
  let id;
  if(e.target.tagName == "TR"){
    id = e.target.dataset.id;
    cargarDetalle(id);
  }
  else if (e.target.tagName == "TD"){
    id = e.target.parentElement.dataset.id;
    cargarDetalle(id);
  }
  else
    return;
}


const cargarDetalle = async id =>{
  try{
    const response = await fetch("https://jsonplaceholder.typicode.com/users/"+id);
    if(!response.ok){
      throw new Error("Error al recuperar el detalle del usuario "+id);
    }
    const json = await response.json();
    crearDivisionDetalle(json);
  }
  catch(error){
    console.error(error);
  }
}



const crearDivisionDetalle = json =>{
  const divDetalle = document.querySelector("#detalle");
  divDetalle.innerHTML = `
  <p><strong>Nombre completo:</strong> ${json.name} </p>
  <p><strong>Compañía:</strong> ${json.company.name} </p>
  `;
}

//////////////////////
// MAIN
//////////////////////



document.querySelector("#btnComenzar").addEventListener("click", async e=>{

  try{

    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if(!response.ok){
      throw new Error("Error al recuperar los usuarios");
    }
    const json = await response.json();
    crearTabla(json);
  }
  catch(error){
    console.error(error);
  }
});
