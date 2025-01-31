"use strict";

/**
 * Muestra el resultado en la web
 * @param {String} mensaje de resultado que se muestra en una división
 */
const imprimeResultado = (mensaje) => {
  divResultado.innerHTML += "<p>" + mensaje + "</p>";
}


/*
  Cada una de estas funciones representa una petición al servidor para que indique el siguiente paso a realizar
*/

const paso1 = () =>{ 
  return new Promise((resolve, reject) =>{
    setTimeout( ()=> {
      //Se realiza la petición al servidor que devuelve el paso y si se realizó correctamente
      const {ok, respuesta} = {ok: true, respuesta:"Paso 1: Precalienta el horno a 180º y prepara el molde"};

      if(ok)
        resolve(respuesta);
      else
        reject(respuesta);
    }, 1000);
  });
}      



const paso2 = () =>{ 
  return new Promise((resolve, reject) =>{
    setTimeout( ()=> {
      //Se realiza la petición al servidor que devuelve el paso y si se realizó correctamente
      const {ok, respuesta} = {ok: true, respuesta:"Paso 2: Prepara la mezcla de 4 huevos y 1 taza de azúcar"};

      if(ok)
        resolve(respuesta);
      else
        reject(respuesta);
      }, 1500);
  });
}



const paso3 = () =>{ 
  return new Promise((resolve, reject) =>{
    setTimeout( ()=> {
      //Se realiza la petición al servidor que devuelve el paso y si se realizó correctamente
      const {ok, respuesta} = {ok: true, respuesta:"Paso 3: Agrega la harina y la levadura química a la mezcla y viértela en el molde"};

      if(ok)
        resolve(respuesta);
      else

      reject(respuesta);

      }, 2000);
  });
}      


const paso4 = () =>{ 
  return new Promise((resolve, reject) =>{
    setTimeout( ()=> {
      //Se realiza la petición al servidor que devuelve el paso y si se realizó correctamente
      const {ok, respuesta} = {ok: true, respuesta:"Paso 4: Hornea el molde 25 minutos"};

      if(ok)
        resolve(respuesta);
      else
        reject(respuesta);

    }, 1000);
  });
}

const paso5 = () =>{ 
  return new Promise((resolve, reject) =>{
    setTimeout( ()=> {
      //Se realiza la petición al servidor que devuelve el paso y si se realizó correctamente
      const {ok, respuesta} = {ok: true, respuesta:"Paso 5: Desmoldar el bizcocho"};

      if(ok)
        resolve(respuesta);
      else
        reject(respuesta);

    }, 1500);
  });
}   



// Representa las llamadas al servidor, suponiendo que sabemos que tenemos 5 pasos que realizar
const llamaPasos = () =>{
  paso1()
  .then( dato =>{
    imprimeResultado(dato);
    return paso2();
  })
  .then( dato =>{
    imprimeResultado(dato);
    return paso3();
  })
  .then( dato =>{
    imprimeResultado(dato);
    return paso4();
  })
  .then( dato =>{
    imprimeResultado(dato);
    return paso5();
  })
  .then( dato =>{
    imprimeResultado(dato);
  })
  .catch( error =>{
    imprimeResultado("Se ha producido un error:\n"+error);
  });

  //Promise hell, imposible de leer
  // paso1()
  // .then( dato =>{
  //   imprimeResultado(dato);
  //   paso2()
  //   .then(dato=>{
  //     imprimeResultado(dato);
  //     paso3()
  //     .then(dato=>{
  //       imprimeResultado(dato);
  //       paso4()
  //       .then(dato=>{
  //         imprimeResultado(dato);
  //         paso5()
  //         .then(dato=>{
  //           imprimeResultado(dato);
  //         })
  //         .catch( error =>{
  //           imprimeResultado("Se ha producido un error:\n"+error);
  //         });
  //       })
  //       .catch( error =>{
  //         imprimeResultado("Se ha producido un error:\n"+error);
  //       });
  //     })
  //     .catch( error =>{
  //       imprimeResultado("Se ha producido un error:\n"+error);
  //     });
  //   })
  //   .catch( error =>{
  //     imprimeResultado("Se ha producido un error:\n"+error);
  //   });
  // })
  // .catch( error =>{
  //   imprimeResultado("Se ha producido un error:\n"+error);
  // });


  //Se lanzan todas las peticiones a la vez, útil si son independientes
  // Promise.all([paso1(), paso2(), paso3(), paso4(), paso5()])
  // .then(datos=>{
  //   imprimeResultado(datos[0]);
  //   imprimeResultado(datos[1]);
  //   imprimeResultado(datos[2]);
  //   imprimeResultado(datos[3]);
  //   imprimeResultado(datos[4]);
  // })
  // .catch(error =>{
  //   imprimeResultado("Se ha producido un error:\n"+error);
  // });
}





// Con async/await
const llamaPasosAsync = async () =>{
  try{
    let dato = await paso1();  
    imprimeResultado(dato);

    dato = await paso2();  
    imprimeResultado(dato);

    dato = await paso3();  
    imprimeResultado(dato);

    dato = await paso4();  
    imprimeResultado(dato);

    dato = await paso5();  
    imprimeResultado(dato);
  }
  catch(error){
    imprimeResultado("Se ha producido un error:\n"+error);
  }
}


const divResultado = document.querySelector("#divResultado");

document.querySelector("#btnAccion").addEventListener('click', e=>{
  divResultado.innerHTML = "";
  // llamaPasos();
  llamaPasosAsync();
});

