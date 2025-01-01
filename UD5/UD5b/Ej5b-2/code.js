"use strict";

const frmTurno = document.querySelector("#frmTurno");
const divSolucion = document.querySelector("#divSolucion");


frmTurno.addEventListener("submit", e=>{
  e.preventDefault();
  
  const opciones = frmTurno.querySelectorAll("[type=checkbox]:checked");
  
  if( opciones.length>2 || opciones.length == 0 ){
    divSolucion.innerHTML= "<p>Al menos una de las opciones debe estar marcada y como máximo estarán marcadas dos.</p>";
    return;
  }
  
  divSolucion.innerHTML = "";

  for(let opcion of opciones){
    divSolucion.innerHTML+=`<p>Seleccionada la opción ${opcion.value}</p>`;
  }
})


frm.btnAceptar.addEventListener("click", e=>{
  if( frm.txtNombre.checkValidity() ){
    //frm.submit();
    //Con el minlength="3", o el pattern aparecerá correcto la cadena vacía "", hay que
    //comprobar también si el campo está vacío
    alert("Correcto")
  }
  else{
    alert("Hay errores que corregir en el nombre")
  }
})