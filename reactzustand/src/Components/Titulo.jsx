import usuarioStore from "../store/store";

function Titulo(){
  const state = usuarioStore();
  
  const { curso, setUsuario, usuario, incrementaEdad } = state;
  
  const cambiaUsuario = ()=>{
    setUsuario( {nombre:"Paco", edad: 22} );
  }
  
  return (<>
    <h1>Aprendiendo React</h1>
    <p>Curso: {curso}</p>
    <p>Usuario: {usuario.nombre} (edad:{usuario.edad})</p>
    <br/>
    <button onClick={cambiaUsuario}>Cambia usuario</button>
    <button onClick={incrementaEdad}>Incrementa edad</button>
  </>)
}

export default Titulo;