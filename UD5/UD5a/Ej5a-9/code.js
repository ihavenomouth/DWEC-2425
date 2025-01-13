"use strict";

/////////////////////////
// FUNCTION
/////////////////////////


const tratarDatos = arrDatos =>{
  
  const divSolucion = document.querySelector("#divSolucion");
  
  // for(let dato of arrDatos){
  //   divSolucion.innerHTML+= `<p>${dato.nombre}</p>`;
  // }


  let sol=`<table>
  </tr>
    <th id="thRed">Red social</th>
    <th id="thSeguidores">Seguidores</th>
  </tr>`;

  for(let dato of arrDatos){
    sol+=`</tr>
      <td><a href="${dato.url}">${dato.nombre}</a></td>
      <td>${dato.seguidores}</td>
    </tr>`;
  }

  sol+=`</table>`;

  divSolucion.innerHTML = sol;

  document.querySelector("#thRed").addEventListener("click", e=>{
    arrDatos.sort(  (red1,red2) => { 
      return red1.nombre.localeCompare(red2.nombre, "es")  
    });
    console.log("Ordenamos por nombre");
    tratarDatos(arrDatos);
  });

  document.querySelector("#thSeguidores").addEventListener("click", e=>{
    arrDatos.sort(  (red1,red2) => red1.seguidores - red2.seguidores  );
    console.log("Ordenamos por seguidores");
    tratarDatos(arrDatos);
  })

}



/////////////////////////
// MAIN
/////////////////////////
let arrDatos; // El array donde almacenaremos los datos del fichero

document.querySelector("#txtFile").addEventListener("change", 
  async (e) => {
    const [file] = e.target.files;

    if (file) {
      const datosJSON = JSON.parse( await file.text() );
      arrDatos = datosJSON.arrRedesSociales;
      tratarDatos( arrDatos );
    }
  }
);