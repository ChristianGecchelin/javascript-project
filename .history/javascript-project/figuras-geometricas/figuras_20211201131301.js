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
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log(`El perimetro del triangulo mide: ${perimetroTriangulo} cm`);
const alturaTriangulo = Math.sqrt(
  ladoTriangulo1 ** 2 - (baseTriangulo / 2) ** 2
);
const superficieTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log(`La superficie del triangulo es: ${superficieTriangulo} cm^2`);
console.groupEnd();
//Codigo Circulo
console.group("Circulo");

const radio = 4;
console.log(`El radio del circulo es: ${radio} cm`);
const diametro = radio * 2;
console.log(`El diametro del circulo es: ${diametro} cm`);
const pi = Math.PI;
const circunferencia = pi * diametro;
console.log(`La circunferencia del circulo es: ${circunferencia} cm`);
const superficieCirculo = radio ** 2 * pi;
console.log(`La superficie del circulo es: ${superficieCirculo} cm^2`);

console.groupEnd();

function calcularAreaTriangulo() {
  const inputLado1 = document.getElementById("inputLado1");
  const valueLado1 = Number(inputLado1.value);
  const inputLado2 = document.getElementById("inputLado1");
  const valueLado2 = Number(inputLado2.value);
  const alturaTriangulo = Math.sqrt(
    ladoTriangulo1 ** 2 - (baseTriangulo / 2) ** 2
  );
}

function altura(lado1, lado2, lado3) {
  let ladosIguales;
  let ladoBase;
  let altura;

  if (
    lado1 + lado2 <= lado3 ||
    lado1 + lado3 <= lado2 ||
    lado2 + lado3 <= lado1
  ) {
    alert("Tu triangulo no existe");
  } else {
    switch (true) {
      case ladoA === ladoB:
        ladosIguales = ladoA;
        ladoBase = ladoC;
    }
  }
}
