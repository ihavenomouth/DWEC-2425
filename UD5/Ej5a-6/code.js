"use strict";


///////////////////
// FUNCTIONS
///////////////////
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

const mueveEne =()=>{
  eneX+=eneVel;
  ene.style.right = eneX + "px";
  requestAnimationFrame(mueveEne);
};


const muertoEne = e => {
  puntos +=50;
  pPuntos.innerText = puntos + " pts";
  eneX=100;
  eneY= getRandomInt(1,401);
  ene.style=`width:100px;height: 100px; background-color: aquamarine; position:absolute; top:${eneY}px; right:${eneX}px;`;
  eneVel*=1.2;
}

///////////////////
// MAIN
///////////////////
const pPuntos = document.querySelector("#pPuntos");
let puntos = 0;
let eneY = 200;
let eneVel = 1;

const ene = document.querySelector("#ene");
let eneX = 0;
mueveEne();

ene.addEventListener("click", muertoEne);