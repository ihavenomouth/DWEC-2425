export function saludo(nombre){
  if(nombre)
    saludoNombre(nombre);
  else
    saludoNombre("");
}

export function saludoCaracola(){
  saludoNombre("caracola");
}

function saludoNombre(nombre){
  alert("Hola " + nombre);
}

export const nombreAutor = "Javier Mancera";

// export { saludo, saludoCaracola, nombreAutor };