const ListaUsuarios = () =>{

  const arrUsuarios = [
    {id: 1, nombre: "Juan", edad: 34},
    {id: 4,nombre: "Paco", edad: 45},
    {id: 45,nombre: "Pedro", edad: 32},
  ];


  return(<>
    <p>Lista de usaurios.</p>
    <ul>
    {
      arrUsuarios.map(usuario=><li key={usuario.id}>{usuario.nombre} (edad: {usuario.edad})</li>)
    }
    </ul>
  </>);
}

export default ListaUsuarios;