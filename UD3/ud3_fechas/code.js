"use strict";



const resultadoDiv = document.getElementById("resultado");
const fechaEntradaInput = document.getElementById("fechaEntrada");
const fechaSalidaInput = document.getElementById("fechaSalida");
const btnReservar = document.getElementById("btnReservar");




btnReservar.addEventListener("click", function() {
  //1.- Recuperamos las fechas
  const fechaEntrada = fechaEntradaInput.valueAsDate;
  const fechaSalida = fechaSalidaInput.valueAsDate;

  //2.- Si las fechas no son válidas (30 de febrero, por ejemplo) valueAsDate devuelve null
  if (!fechaEntrada || !fechaSalida) {
      resultadoDiv.innerHTML = "<p>Debe indicar ambas fechas.</p>";
      return;
  }
  //3.- Si la fecha de entrada es anterior a la de salida, mostramos el mensaje de error
  if (fechaSalida < fechaEntrada) {
      resultadoDiv.innerHTML = "<p>La fecha de salida no puede ser anterior a la fecha de entrada.</p>";
      return;
  } 

  //4.- En caso contrario calculamos los días
  const diferenciaTiempo = fechaSalida.getTime() - fechaEntrada.getTime(); //en milisegundos
  console.log(diferenciaTiempo);
  console.log(fechaSalida - fechaEntrada );
  //                                     segs  horas  días 
  const diasReserva = diferenciaTiempo / 1000 / 3600 / 24 + 1;
  resultadoDiv.textContent = `Días de reserva: ${diasReserva}`;
});