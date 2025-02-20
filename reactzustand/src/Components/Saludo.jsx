/* eslint-disable react/prop-types */

const Saludo = ({nombre, apellido}) =>{
  return (<>
  <p>Bienvenido al maravilloso mundo de React.</p>

    {
      nombre&&apellido?
      <p>Te damos la bienvenida, {nombre} {apellido}.</p>
      :
      <p>Te damos la bienvenida, anónimo.</p>
    }
  
  </>);
}

export default Saludo;