"use strict";

/////////////////////
// FUNCTION
////////////////////



/////////////////////
// MAIN
////////////////////

const txtTitulo = document.querySelector("#txtTitulo");
const txtNota = document.querySelector("#txtNota");


//Guardar
document.querySelector("#btnGuardar").addEventListener("click", e=>{
  if(!txtTitulo.value || !txtNota.value)
    return;

  // alert(txtTitulo.value)

  localStorage.setItem(txtTitulo.value, txtNota.value);
});


// Cargar
document.querySelector("#btnCargar").addEventListener("click", e=>{
  if(!txtTitulo.value)
    return;

  let textoRecuperado = localStorage.getItem(txtTitulo.value);
  if(textoRecuperado==null){
    txtNota.value="No hay ninguna nota llamada "+txtTitulo.value;
  }
  else{
    txtNota.value=textoRecuperado;
  }
});


// Eliminar
document.querySelector("#btnEliminar").addEventListener("click", e=>{
  if(!txtTitulo.value)
    return;
  
  //Una manera de hacerlo
  let textoRecuperado = localStorage.getItem(txtTitulo.value);
  if(textoRecuperado==null){
    txtNota.value="No hay ninguna nota llamada "+txtTitulo.value;
  }
  else{
    localStorage.removeItem(txtTitulo.value);
  }

  //Otra manera de hacerlo:
  // if( localStorage.hasOwnProperty(txtNota.value) ){
  //   localStorage.removeItem(txtNota.value)
  // }
  // else{
  //   txtNota.value="No hay ninguna nota llamada "+txtTitulo.value;
  // }
});
