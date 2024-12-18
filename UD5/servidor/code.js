"use strict";


//Botón que muestra el cuadro de diálogo
document.querySelector("#btnMostrar").addEventListener('click', ()=>{
  document.querySelector("#dialogo").showModal();
});

//Cerramos el cuadro de diálogo
document.querySelector("#btnCerrar").addEventListener("click", e=>{
  document.querySelector("#dialogo").close();
});

//También se cierra si pulsamos ESC o fuera del cuadro de diálogo
document.querySelector("dialog").addEventListener("click", e=>{
  if(e.target.tagName === "DIALOG")
    document.querySelector("#dialogo").close();
})

//Enviamos el formulario
// document.querySelector("#frmTortilla").addEventListener("submit", e=>{
//   e.preventDefault();
//   alert( document.querySelector("[name=radioTortilla]:checked").value  )
// });

