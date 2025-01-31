"use strict";

///////////////////////
// FUNCTION
///////////////////////


/**
 * Genera una llamada GET con async/await
 * @param {URL} url - recurso sobre el que se hace la petición
 * @param {Function} callback - función que tratará los datos
 */
 const getData = async (url, callback, xml) =>{
  try{
    const response = await fetch(url,{});
    if(!response.ok){
      throw new Error("Hubo un error al recuperar los datos");    
    }
    if(xml){
      const datos = await response.text();
      const xmlparser = new window.DOMParser();
      const datosXML = xmlparser.parseFromString(datos, "text/xml");
      callback(datosXML);
    }
    else{
      const datos = await response.json();
      callback(datos);
    }
  }
  catch(error){
    console.error(error);
  }
}


const getDataThen = async (url, callback) =>{
  fetch(url)
  .then(response => {
    if(!response.ok)
      throw new Error("No se pudo realizar la petición");
    return response.text();
  })
  .then(html => callback(html) )
  .catch(error => divResultado.innerHTML=error);
  }
  



const tratarXML = (xml) =>{
  const city = xml.querySelector("city").textContent;
  const firstName = xml.querySelector("firstName").textContent;
  const lastName = xml.querySelector("lastName").textContent;
  const state = xml.querySelector("state").textContent;
  divResultado.innerHTML = `
  <p>XML</p>
  <ul>
    <li>City: ${city}</li>
    <li>First name: ${firstName}</li>
    <li>Last name: ${lastName}</li>
    <li>State: ${state}</li>
  </ul>`;
}

const tratarJSON = (json) =>{
  const city = json.city;
  const firstName = json.firstName;
  const lastName = json.lastName;
  const state = json.state;
  divResultado.innerHTML = `
  <p>JSON</p>
  <ul>
    <li>City: ${city}</li>
    <li>First name: ${firstName}</li>
    <li>Last name: ${lastName}</li>
    <li>State: ${state}</li>
  </ul>`;
}

const tratarHTML = (html) =>{
  divResultado.innerHTML = html;
}

//////////////////////
// MAIN
//////////////////////
const divResultado = document.querySelector("#divResultado");

document.querySelector("#btnPrimeraAPI").addEventListener("click", e=>{
  getData("https://mocktarget.apigee.net/xml", tratarXML, true);
});

document.querySelector("#btnSegundaAPI").addEventListener("click", e=>{
  getDataThen("https://mocktarget.apigee.net/iloveapis", tratarHTML);
});

document.querySelector("#btnTerceraAPI").addEventListener("click", e=>{
  getData("https://mocktarget.apigee.net/json", tratarJSON, false);
});