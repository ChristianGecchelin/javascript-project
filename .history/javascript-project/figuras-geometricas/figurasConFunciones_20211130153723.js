/* Codigo del cuadrado */
console.group("Cuadrado");
const ladoCuadrado = 5;
console.log("Cada lado del cuadrado mide: " + ladoCuadrado + " cm.");
function perimetroCuadrado(ladoCuadrado) {
  return ladoCuadrado * 4;
}
const perimetroCuadrado = ladoCuadrado * 4;
console.log(`Perimetro del cuadrado es: ${perimetroCuadrado} cm.`);

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log(`El area del cuadrado es: ${areaCuadrado} cm^2.`);
console.groupEnd();
