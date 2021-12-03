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
function calcularAltura(lado1, lado2, lado3) {
  let ladosIguales;
  let ladoBase;
  let altura;

  if (
    lado1 + lado2 <= lado3 ||
    lado1 + lado3 <= lado2 ||
    lado2 + lado3 <= lado1
  ) {
    alert(
      "En un triangulo la base no puede ser mayor a la suma de sus catetos"
    );
  } else {
    switch (true) {
      case lado1 === lado2:
        ladosIguales = lado1;
        ladoBase = lado3;
        break;
      case lado1 === lado3:
        ladosIguales = lado1;
        ladoBase = lado2;
        break;
      case lado3 === lado2:
        ladosIguales = lado2;
        ladoBase = lado1;
        break;
    }
    if (!ladosIguales) {
      alert("Tu triangulo no es isosceles, ingresa la altura");
    } else {
      altura = Math.sqrt(ladosIguales ** 2 - ladoBase ** 2 / 4);
    }
  }
  return ladosIguales, ladoBase, altura;
}
function areaTriangulo(ladoBase, altura) {
  return (
    (ladoBase * altura) / 2
  ); /* tengo que llamar a la funcion altura para pasarle el dato */
}
console.groupEnd();

//Codigo Circulo
console.group("Circulo");
function diametroCirculo(radio) {
  return radio * 2;
}
const pi = Math.PI;
function circunferencia(radio) {
  const diametro = diametroCirculo(radio);
  /* llamo a una funcion dentro de otra y creo una variable que tiene alcance local */
  return diametro * pi;
}
function superficieCirculo(radio) {
  return pi * radio ** 2;
}

console.groupEnd();
/* Creo una funcion, que a traves del id obtengo lo que el usuario ingreso en el input. y con eso le saco el value que le paso
a la funcion que cree antes y es la encargada de hacer el calculo para luego mostrarse en un aler */
function calcularPerimetroCuadrado() {
  const input = document.getElementById("inputCuadrado");
  const value = input.value;
  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}
function calcularAreaCuadrado() {
  const input = document.getElementById("inputCuadrado");
  const value = input.value;
  const area = areaCuadrado(value);
  alert(area);
}

function calcularPerimetroTriangulo() {
  const inputLado1 = document.getElementById("inputLado1");
  const valueLado1 = Number(inputLado1.value);
  const inputLado2 = document.getElementById("inputLado2");
  const valueLado2 = Number(inputLado2.value);
  const inputBase = document.getElementById("inputBase");
  const valueBase = Number(inputBase.value);
  /* Es importante ponerle number porque por mas que el input tenga type number, este lo transforma como un string */
  const perimetro = perimetroTriangulo(valueLado1, valueLado2, valueBase);
  alert(perimetro);
}

function calcularAlturaTriangulo() {
  const inputLado1 = document.getElementById("inputLado1");
  const valueLado1 = Number(inputLado1.value);
  const inputLado2 = document.getElementById("inputLado2");
  const valueLado2 = Number(inputLado2.value);
  const inputBase = document.getElementById("inputBase");
  const valueBase = Number(inputBase.value);
  const alturaTriangulo = calcularAltura(valueLado1, valueLado2, valueBase);
  alert(alturaTriangulo);
}

function calcularAreaTriangulo() {
  /* const inputAltura = document.getElementById("inputAltura");
  const valueAltura = Number(inputAltura.value);
  const inputBase = document.getElementById("inputBase");
  const valueBase = inputBase.value;
  const area = areaTriangulo(valueAltura, valueBase);
  alert(area); */
  const inputLado1 = document.getElementById("inputLado1");
  const valueLado1 = Number(inputLado1.value);
  const inputLado2 = document.getElementById("inputLado2");
  const valueLado2 = Number(inputLado2.value);
  const inputBase = document.getElementById("inputBase");
  const valueBase = Number(inputBase.value);
  const altura = calcularAltura(valueLado1, valueLado2, valueBase);
  const area = areaTriangulo(ladoBase, altura);
  alert(area);
}

function calcularPerimetroCirculo() {
  const inputRadio = document.getElementById("inputRadio");
  const valueRadio = inputRadio.value;
  const perimetro = circunferencia(valueRadio);
  alert(perimetro);
}
function calcularAreaCirculo() {
  const inputRadio = document.getElementById("inputRadio");
  const valueRadio = inputRadio.value;
  const superficie = superficieCirculo(valueRadio);
  alert(superficie);
}
