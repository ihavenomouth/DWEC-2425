/* eslint-disable react/prop-types */
function Titulo({nombre}){
  return (<>
    <h1 className="bg-red-500 text-center text-white p-8 text-5xl">Aprendiendo React</h1>
    <p>Hola {nombre}</p>
  </>);

}

export default Titulo;