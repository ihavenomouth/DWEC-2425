"use strict";

///////////////////
// FUNCTIONS
//////////////////


/**
 * Devuelve la cadena invertida (hola = aloh)
 * @param {String} cadena La cadena que se desea invertir
 * @returns La cadena invertida
 */
function reverse(cadena){
	let rev="";
	for(let letra of cadena){
		rev = letra+rev
	}
	return rev;
}


function reverse(cadena){
	let rev="";
	for(let i=0; i<cadena.length;i++){
    let letra = cadena[i];
		rev = letra+rev
	}
	return rev;
}





function esPalindromo(cadena){
  //1.- Para comparar los caracteres los pasamos a minúsculas
  cadena = cadena.toLowerCase();
  
  //2.- Cambiamos los acentos y diéresis por caracteres sin ellos
  cadena = cadena.replaceAll(/[áàä]/g, "a");
  cadena = cadena.replaceAll(/[éèë]/g, "e");
  cadena = cadena.replaceAll(/[íìï]/g, "i");
  cadena = cadena.replaceAll(/[óòö]/g, "o");
  cadena = cadena.replaceAll(/[úùü]/g, "u");

  //3.- Quitamos los espacios en blanco
  cadena = cadena.replaceAll(" ", "");

  //4.- Recorremos la cadena desde el primer caracter hata la mitad
  //    y comparamos el caracter 0 con el que ocupa la posición -1,
  //    el caracter 1 con el que ocupa la posición -2...
  for(let i=0 ; i<cadena.length/2 ; i++){
    // console.log(cadena[i], cadena.at(-i), i);
    let j=i+1;
    if(cadena[i] != cadena.at(-j)){
      return false;
    }
  }
  return true;
}


function muestraSiEsUnPalindromo(cadena){
  const divResultado = document.querySelector("#resultado");

  if( esPalindromo(cadena) ){
    divResultado.innerHTML += `<p><u>${cadena}</u> es un palíndromo</p>`;
  }
  else{
    divResultado.innerHTML += `<p><i>${cadena}</i> NO es un palíndromo</p>`;
  }
}

///////////////////
// MAIN
//////////////////

muestraSiEsUnPalindromo("Someto votemos");
muestraSiEsUnPalindromo("Äésèà");
muestraSiEsUnPalindromo("Arriba la birra");
muestraSiEsUnPalindromo("Hola caracola");
muestraSiEsUnPalindromo("Dábale arroz a la zorra el abad");
muestraSiEsUnPalindromo("El perro del hortelano");
muestraSiEsUnPalindromo("El pingüino oniügnip lE");


