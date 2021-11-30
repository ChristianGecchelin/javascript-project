/* Codigo del cuadrado */
console.group("Cuadrado");
const ladoCuadrado = 5;
console.log("Cada lado del cuadrado mide: " + ladoCuadrado + " cm.");

const perimetroCuadrado = ladoCuadrado * 4;
console.log(`Perimetro del cuadrado es: ${perimetroCuadrado} cm.`);

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log(`El area del cuadrado es: ${areaCuadrado} cm^2.`);
console.groupEnd();

/* Codigo del triangulo */
console.group("Triangulo");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log(
  `Los lados del triangulo miden: ${ladoTriangulo1}cm, ${ladoTriangulo2}cm, ${baseTriangulo}cm. `
);
console.groupEnd();
