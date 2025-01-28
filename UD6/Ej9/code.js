"use strict";


///////////////////////
// FUNCTION
//////////////////////
const crearCards = arrDatos =>{
  // Recorremos el array
  for(let producto of arrDatos){
    crearCardProducto(producto);
  }
};

const crearCardProducto = (prod) =>{
  const galeria = document.querySelector("#galeria");

  const div = document.createElement("div");
  const img = document.createElement("img");
  img.src = prod.imagen;
  img.dataset.producto = prod.producto;
  img.dataset.precio = prod.precio;
  img.dataset.tallas = prod.tallas;
  div.append(img);
  galeria.append(div);
}

///////////////////////
// MAIN
//////////////////////

const arrDatos = [
  {
  "producto" : "Semi-sheer shirt with pintucks",
  "precio" : "29,95",
  "tallas" : ["XS", "S", "M", "L"],
  "imagen" : "img1.jpg"
  },
  {
  "producto" : "Mini dress with lace trims",
  "precio" : "35,95",
  "tallas" : ["XL"],
  "imagen" : "img2.jpg"
  },
  {
  "producto" : "Diamond pattern mini dress",
  "precio" : "35,95",
  "tallas" : ["S", "M", "L"],
  "imagen" : "img3.jpg"
  },
  {
  "producto" : "Red shirt with laces",
  "precio" : "15,95",
  "tallas" : ["M", "L", "XL"],
  "imagen" : "img4.jpg"
  },
];

crearCards(arrDatos);

// El evento delegado de la galería
document.querySelector("#galeria").addEventListener("click", e=>{
  
  // Recuperamos los datos del producto clickado
  if(e.target.tagName != "IMG"){
    return;
  }

  const img = e.target;
  const producto = img.dataset.producto;
  const precio = img.dataset.precio;
  const tallas = img.dataset.tallas;

  // Creamos el aside y recuperamos una referencia de la división 
  // donde vamos a meterlo
  const aside = document.createElement("aside");
  const divPadre = document.querySelector("#galeria").parentElement;
  
  // Si ya hay un aside, que lo quite
  if(divPadre.lastElementChild.tagName=="ASIDE"){
    divPadre.lastElementChild.remove();
  }

  // Añadimos los datos al aside
  const ul = document.createElement("ul");
  const li1 = document.createElement("li");
  li1.innerText = producto;
  const li2 = document.createElement("li");
  li2.innerText = precio + " €";
  const li3 = document.createElement("li");
  li3.innerText = tallas;
  ul.append(li1, li2, li3);
  aside.append(ul);

  // Añadimos el aside a la división
  divPadre.append(aside);
});