import './App.css'

function App() {
  // Esto es un comentario de javascript
  const autor = "Javier Mancera";

  const detalle = <details><summary>Cosas</summary> Muchas cosas ashkdj shajdsa hdjsdhj</details>;

  return (
    <>
      <h1>Hola caracola</h1>
      {/* Esto es un comentario en JSX */}
      <p>Aprendiendo React con {autor}.</p>
      <p>El resultado de 7x5 es {7*5}.</p>
      {detalle}
    </>
  );
}

export default App
