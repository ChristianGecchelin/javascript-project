/* Codigo del cuadrado */
console.group("Cuadrado");
function perimetroCuadrado(lado) {
  return lado * 4;
}
/* console.log(`Perimetro del cuadrado es: ${perimetroCuadrado} cm.`); */
function areaCuadrado(lado) {
  return (
    lado ** 2
  ); /* debe estar escrito de igual manera el parametro que el return */
}

/* console.log(`El area del cuadrado es: ${areaCuadrado} cm^2.`); */
console.groupEnd();

/* Codigo del triangulo */
console.group("Triangulo");

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}
function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}
console.groupEnd();

//Codigo Circulo
console.group("Circulo");
function diametroCirculo(radio){
    return radio*2;
}
const pi = Math.PI;
function circunferencia (radio){
    const diametro = function diametroCirculo(radio);
    return diametro*pi;
}
const circunferencia = pi * diametro;
console.log(`La circunferencia del circulo es: ${circunferencia} cm`);
const superficieCirculo = radio ** 2 * pi;
console.log(`La superficie del circulo es: ${superficieCirculo} cm^2`);

console.groupEnd();

