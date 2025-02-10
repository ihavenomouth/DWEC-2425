class Punto2d {
  constructor() {
    this.x = 0;
    this.y = 0;
  }
  setCoordenadas(x,y){
    this.x = x;
    this.y = y;
  }
  imprime(div){
    div.innerHTML += `<p>Punto ${this.x}, ${this.y}</p>`;
  }
}

export default new Punto2d();