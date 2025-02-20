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
    <div style="display: flex;flex-wrap:wrap;border: 1px solid deeppink;">
      {
        arrDatos.map(=>)
      }
    </div>
  </section>);
  
}

export default ListaMiembrosEquipo;