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
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
console.log(
  `Los lados del triangulo miden: ${ladoTriangulo1}cm, ${ladoTriangulo2}cm, ${baseTriangulo}cm. `
);
function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}
function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log(`El perimetro del triangulo mide: ${perimetroTriangulo} cm`);
const alturaTriangulo = Math.sqrt(
  ladoTriangulo1 ** 2 - (baseTriangulo / 2) ** 2
);
const superficieTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log(`La superficie del triangulo es: ${superficieTriangulo} cm^2`);
console.groupEnd();
