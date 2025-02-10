import punto from "./Punto2D.js";
import punto2 from "./Punto2D.js";

const divResultado = document.querySelector("#divResultado");

divResultado.innerHTML = "<p>Iniciamos la ejecución importando dos veces el módulo</p>";

divResultado.innerHTML += "<p>Cambiamos la coordenada del punto 2</p>";
punto2.setCoordenadas(10,10);

divResultado.innerHTML += "<p>Imprimimos el punto 1</p>";
punto.imprime(divResultado);

divResultado.innerHTML += "<p>Imprimimos el punto 2</p>";
punto2.imprime(divResultado);
