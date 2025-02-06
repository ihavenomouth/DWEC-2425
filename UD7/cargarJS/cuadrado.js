console.info("Módulo cargado correctamente");

const cuadrado = n => n*n;

const valor = document.querySelector("#dato").value;

console.log(`El cuadrado de ${valor} es ${cuadrado(valor)}`);

alert("Hola!")