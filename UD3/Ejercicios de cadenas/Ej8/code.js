"use strict";


/////////////////
// FUNCTION
/////////////////

/**
 * Reemplaza en cadena cada ocurrencia de cada caracter de caracteresReemplazar por
 * el equivalente en caracteresReemplazo
 * @param {String} cadena 
 * @param {String} caracteresReemplazar 
 * @param {String} caracteresReemplazo 
 * @returns La cadena resultado
 */
function reemplaza(cadena,  caracteresReemplazar, caracteresReemplazo ){
  
  if(caracteresReemplazar.length != caracteresReemplazo.length){
    throw new Error("las cadenas de reemplazo no tienen la misma longitud");
  }
    
  // let sol = cadena;
  // for( let i=0; i<caracteresReemplazar.length; i++ ){
  //   const letraReemplazar = caracteresReemplazar[i];
  //   const letraReemplazo  = caracteresReemplazo[i];
  //   sol = sol.replaceAll(letraReemplazar, letraReemplazo);
  // }



  let sol =""; //la cadena de caracteres con la solución

  //Recorremos la cadena que hay que modificar
  for(let letra of cadena){

    //Si la letra actual está en la lista de caracteres a reemplazar...
    if(caracteresReemplazar.includes(letra)){
      // ...calculamos su índice...
      const indice = caracteresReemplazar.indexOf(letra);
      // ...y añadimos el caracter por el que hay que reemplazarlo
      sol+= caracteresReemplazo[indice];
    }
    else{
      // en caso contrario añadimos la letra que no hay que modificar
      sol+=letra;
    }

  }

  return sol;
}


/////////////////
// MAIN
/////////////////

console.log( reemplaza("pues yavestruz", "eus", "*xp") );

console.log( reemplaza("pues yavestruz", "aeiou", "12345") );

console.log( reemplaza("atacaremos al amanecer", 
  "abcdefghijklmnoprstuvwxyz", 
  "defghijklmnoprstuvwxyzabc") 
);

// "dwdfduhpsv do dpdrhfhu"
// "atacarem   a  ama ecer"

console.log( reemplaza("pues yavestruz", "aeiou", "123") );