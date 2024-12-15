"use strict";

//////////////
// Functions
//////////////



///////////////
// Main
///////////////

function clickTodos(ev) { 
  // ev.stopPropagation();
  console.log(ev.currentTarget);
}

document.getElementById("idEnlace").addEventListener('click', clickTodos, false);
document.getElementById("idParrafo").addEventListener('click', clickTodos, false);
document.getElementById("idDiv").addEventListener('click', clickTodos, false);





// document.querySelector("#btnAnadir").addEventListener('click', ()=>{
//   const texto = document.querySelector("#txtNuevoElemento").value;  
//   document.querySelector("#lista").innerHTML += `<li>${texto}</li>`;
// });

// document.querySelector("#lista").addEventListener('click', (e)=>{

//   if(e.target.tagName === "LI"){
//     e.target.style="display:none;";
//   }
// });