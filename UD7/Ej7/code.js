"use strict";

///////////////////////
// FUNCTION
//////////////////////

/**
 * Función que devuelve un entero entre 0 y MAX (sin incluir)
 * Está sacada del MDN 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 * @param {Number} max 
 * @returns 
 */
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}



/**
 * Muestra en pantalla la imagen cuyo id se pasa como parámetro
 * @param {Number} id 
 */
async function mostrarImagen(id){
  // Buscamos la imagen a mostrar en el array
  const jsonImg = arrImagenes.find( img=>img.id == id );

  // Borramos el contenido de la división donde vamos a mostrar la imagen
  divImagen.replaceChildren();

  // Creamos la imagen
  const img = document.createElement("img");
  
  // Reducimos el tamaño de la imagen a solicitar (por defecto son enormes 5000x3000)
  // Lo que hacemos es convertir la url en un array y dividir el ancho y el alto por 10
  // luego volvemos a unirlo en una cadena de caracteres
  let download_url = jsonImg.download_url;

  const download_url_Array = download_url.split("/");
  download_url_Array[5] = Math.floor(download_url_Array[5] / 10);
  download_url_Array[6] = Math.floor(download_url_Array[6] / 10);
  download_url = download_url_Array.join("/");
  
  console.log(download_url);
  img.src = download_url;
  
  // Creamos ahora el párrafo con el autor
  const pAutor = document.createElement("p");
  pAutor.innerText = jsonImg.author;

  // Añadimos la imagen y el párrafo a la división
  divImagen.append(pAutor);
  divImagen.append(img);
}




/**
 * Carga desde el servidor una nueva lista de imágenes
 * y la almacena en el array arrImagenes
 * @param {Number} pagina - Página de imágenes a cargar 
 */
async function cargaPagina(pagina){
  // URL de lista de imágenes: https://picsum.photos/v2/list?page=2
  try{
    const response = await fetch("https://picsum.photos/v2/list?page=" + pagina);
    if(! response.ok)
      throw new Error("No se pudo recuperar la lista de imágenes");
    arrImagenes = await response.json();
  }
  catch(error){ 
    console.error(error);
  }
}



/**
 * Función que se encarga de cargar la primera lista de imágenes
 * y mostrar la primera imagen en pantalla
 */
const inicio = async () =>{
  await cargaPagina(pagina);
  await mostrarImagen(numImagen);
} 




//////////////////////
// MAIN
//////////////////////
const divImagen = document.querySelector("#imagen");

// vbles globales que vamos a usar
let arrImagenes = [];
let numImagen = getRandomInt(30);
let pagina = 1;

// Arrancamos nuestra aplicación con la primera petición
inicio(numImagen, pagina);





//////////////////////
// Event Listeners
//////////////////////


// Los eventos de los botones
document.querySelector("#btnAnterior").addEventListener("click", async e=>{
  if(numImagen>0)
    numImagen--;

  if( (numImagen+1)%30 == 0 && pagina>1){
    pagina--;
    await cargaPagina(pagina);
  }
  await mostrarImagen(numImagen);
  window.scrollBy(0, window.innerHeight);
});


document.querySelector("#btnSiguiente").addEventListener("click", async e=>{
  if( (numImagen+1)%30 == 0){
    pagina++;
    await cargaPagina(pagina);
  }
  numImagen++;
  
  await mostrarImagen(numImagen);
  window.scrollBy(0, window.innerHeight);
});


document.addEventListener("keyup", async e=>{
  if(e.key =="ArrowRight"){
    if( (numImagen+1)%30 == 0){
      pagina++;
      await cargaPagina(pagina);
    }
    numImagen++;
    
    await mostrarImagen(numImagen);
    window.scrollBy(0, window.innerHeight);
  }
  else if(e.key =="ArrowLeft"){
    if(numImagen>0)
      numImagen--;
  
    if( (numImagen+1)%30 == 0 && pagina>1){
      pagina--;
      await cargaPagina(pagina);
    }
    await mostrarImagen(numImagen);
    window.scrollBy(0, window.innerHeight);
  }
})