"use strcit";


///////// Bloqueo total
document.querySelector("#btnBloqueoTotal").addEventListener("click", e=>{
  
  // while(true){}
  for(;;){}
  
  alert("Esto no se llegará a ver nunca");
});

///////// Bloqueo de 5 segundos
document.querySelector("#btnBloqueo5seg").addEventListener("click", e=>{
  const start = Date.now();
  while(Date.now() - start < 5000){}
});

///////// Stack overflow
document.querySelector("#btnStackOverflow").addEventListener("click", e=>{
  function fn(){
    return fn(); //Internal error: too much recursion
  }
  fn();
});




///////// Evolución de la pila
let paso = 0;
const pExplicacion = document.querySelector("#pExplicacion");
const pila = document.querySelector("#pila");

document.querySelector("#btnSiguientePaso").addEventListener("click", e=>{
  paso++;
  if(paso==1){
    pExplicacion.innerHTML=`Paso 1: se ejecuta el <code>main()</code>`;
    const div = document.createElement("div");
    div.innerHTML="main()"
    pila.append(div);
  }
  else if(paso==2){
    pExplicacion.innerHTML=`Paso 2: se llama a la función <code>calcularCuadrado(5)</code>`;
    const div = document.createElement("div");
    div.innerHTML="calcularCuadrado(5)"
    pila.append(div);
  }
  else if(paso==3){
    pExplicacion.innerHTML=`Paso 3: se llama a la función <code>cuadrado(5)</code>`;
    const div = document.createElement("div");
    div.innerHTML="cuadrado(5)"
    pila.append(div);
  }
  else if(paso==4){
    pExplicacion.innerHTML=`Paso 4: se llama a la función <code>multiplicar(5, 5)</code>`;
    const div = document.createElement("div");
    div.innerHTML="multiplicar(5,5)"
    pila.append(div);
  }
  else if(paso==5){
    pExplicacion.innerHTML=`Paso 5: se termina la ejecución de la función <code>multiplicar(5, 5)</code> que devuelve <code>25</code> como resultado`;
    pila.lastElementChild.remove();
  }
  else if(paso==6){
    pExplicacion.innerHTML=`Paso 6: ese valor <code>25</code> se devuelve como resultado de la función <code>cuadrado(5)</code>, que se quita de la pila`;
    pila.lastElementChild.remove();
  }
  else if(paso==7){
    pExplicacion.innerHTML=`Paso 7: se asigna <code>25</code> a la variable <code>cuad</code>`;
  }
  else if(paso==8){
    pExplicacion.innerHTML=`Paso 8: se ejecuta la función <code>console.log(25)</code>`;
    const div = document.createElement("div");
    div.innerHTML="console.log(25)"
    pila.append(div);
  }
  else if(paso==9){
    pExplicacion.innerHTML=`Paso 9: al terminar la ejecución de la función <code>console.log(25)</code>, se quita de la pila`;
    pila.lastElementChild.remove();
  }
  else if(paso==10){
    pExplicacion.innerHTML=`Paso 10: se finaliza la ejecución de la función <code>calcularCuadrado(5)</code> y se quita de la pila`;
    pila.lastElementChild.remove();
  }
  else{
    pExplicacion.innerHTML=`Paso 11: se finaliza la ejecución del <code>main()</code>, se quita de la pila y ya no queda nada más que ejecutar<br>(Pulsa el botón para empezar de nuevo)`;
    pila.lastElementChild.remove();
    paso=0;
  }

  // queueMicrotask(()=>{console.log("Hola")})
  // console.log("Caracola")

});


///////// TimeOut 0
function timeOutCero(){
  const divTimeOutCero = document.querySelector("#divTimeOutCero");
  divTimeOutCero.innerHTML = "";
  divTimeOutCero.innerHTML += "<p>1</p>";
  setTimeout( ()=>{divTimeOutCero.innerHTML += "<p>2</p>";}, 0);
  divTimeOutCero.innerHTML += "<p>3</p>";
}
document.querySelector("#btnTimeOutCero").addEventListener("click", timeOutCero);


