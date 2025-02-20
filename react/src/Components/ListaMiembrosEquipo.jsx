const ListaMiembrosEquipo = () =>{
  const arrDatos = [
    { nombre: "Javier", img: "https://robohash.org/Javier.png", puesto: "Front-end developer"},
    { nombre: "Carlos", img: "https://robohash.org/Carlos.png", puesto: "Back-end developer"},
    { nombre: "Mariano", img: "https://robohash.org/Mariano.png", puesto: "Diseñador principal"},
    { nombre: "David", img: "https://robohash.org/David.png", puesto: "Analista programador"},
    { nombre: "Jesús", img: "https://robohash.org/Jesús.png", puesto: "Relaciones públicas"},
  ];

  return (<section>
    <p>Miembros del equipo</p>
    <div style={
        {
          display: "flex", 
          flexWrap:"wrap",
          border: "1px solid deeppink",
          gap: "1rem",
          padding: "1rem"
        }
      }>
      {
        arrDatos.map(miembro=>{
          return (
          <div key={miembro.nombre} style={{
            flex:"1 1 0",
            maxWidth:"200px",
            border: "1px solid white",
            padding: "1rem"
          }}>
              <p>{miembro.nombre}</p>
              <img src={miembro.img} width="150px"/>
              <p>{miembro.puesto}</p>
          </div>)
        })
      }
    </div>
  </section>);
  
}

export default ListaMiembrosEquipo;