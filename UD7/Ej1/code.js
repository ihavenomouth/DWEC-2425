"use strict";


///////////////////////
// FUNCTION
///////////////////////
function loadXMLDoc(filename, callback) {
  let xhttp;
  if (window.XMLHttpRequest) {
    xhttp = new XMLHttpRequest();
  }
  else { // código de IE5 and IE6
    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xhttp.onreadystatechange = function (){
    if (xhttp.readyState === XMLHttpRequest.DONE) {
      if (xhttp.status === 200) {
        callback(xhttp.responseXML);
        // callback(xhttp.responseText); // si el fichero es de texto
      } else {
        console.log("Hubo un error con la petición.");
      }
    }	
  };
  xhttp.open("GET", filename, true); //true = asíncrona, //false = síncrona
  xhttp.send();
}

/**
 * Genera una etiqueta <div> con la información de una comida
 * @param {XMLDocument} food 
 */
const crearCard = (food) =>{
  const name = food.firstElementChild;
  const price = name.nextElementSibling;
  const desc = price.nextElementSibling;
  const cal = desc.nextElementSibling;

  // Creamos los elementos y añadimos el texto
  const div = document.createElement("div");
  const p = document.createElement("p");
  p.innerHTML = `<strong>${name.textContent}</strong><br> (${price.textContent} - Cal: ${cal.textContent})`;
  const p2 = document.createElement("p");
  p2.innerHTML = `${desc.textContent}`;
  
  //Añadimos los párrafos y la clase CSS
  div.append(p, p2);
  div.classList.add("notice");
  return div;
}


const tratarComidas = (xml) =>{
  xml.querySelectorAll("food").forEach(
    comida => {
      divLista.append(  crearCard(comida) );
      // divLista.innerHTML += `<p>${comida.textContent}</p>`;
    }
  );
}
z

///////////////////////
// MAIN
///////////////////////

const divLista = document.querySelector("#lista");

loadXMLDoc("simple.xml", tratarComidas, true);
