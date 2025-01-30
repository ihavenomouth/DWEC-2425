"use strict";

function promesa(){
  return new Promise( (res,rej)=>{ res("<p>4: La promesa</p>"); });
}

function ordenDeEjecución(){
  divResultado.innerHTML+="<p>2: primer mensaje</p>";

  // setTimeout( ()=>divResultado.innerHTML+="<p>3: setTimeOut</p>", 5000); // usar 100 y 0

  // promesa().then( mensaje=>{ divResultado.innerHTML+=mensaje; });

  divResultado.innerHTML+="<p>5: último mensaje</p>";
}

/////////////////////////
// MAIN
////////////////////
const divResultado = document.querySelector("#divResultado");
document.querySelector("#btnAccion").addEventListener('click', 
  e=>{
    divResultado.innerHTML = "";
    // Promise.resolve("<p>1: promesa antes de la función</p>").then(m=>divResultado.innerHTML+=m);
    ordenDeEjecución();
    // divResultado.innerHTML+="<p>6: último mensaje fuera de la función</p>";
  }
);

