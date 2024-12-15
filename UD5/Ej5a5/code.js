"use strict";


///////////////////
// FUNCTIONS
///////////////////

///////////////////
// MAIN
///////////////////
let arrProvincias = ["Álava","Albacete","Alicante","Almería","Ávila","Badajoz","Baleares",
  "Barcelona","Burgos","Cáceres","Cádiz","Castellón","Ciudad Real","Córdoba","Coruña","Cuenca",
  "Girona","Granada","Guadalajara","Guipuzcoa","Huelva","Huesca","Jaén","León","Lleida",
  "Rioja","Lugo","Madrid","Málaga", "Murcia","Navarra","Orense","Asturias","Palencia","Las Palmas",
  "Pontevedra","Salamanca","Tenerife","Cantabria","Segovia","Sevilla","Soria","Tarragona","Teruel",
  "Toledo","Valencia","Valladolid","Vizcaya","Zamora","Zaragoza","Ceuta","Melilla"];

const txtCP = document.querySelector("#txtCP");
const divSolucion = document.querySelector("#divSolucion");

txtCP.addEventListener("input", e=>{
  const CP = e.target.value;

  if(CP.length == 5){
    const indice = Number( CP.slice(0,2) ) - 1;
    if(indice>53 || indice <0) return;
    divSolucion.innerHTML = arrProvincias[indice];
  }
  else{
    divSolucion.innerHTML = "";
  }
})
