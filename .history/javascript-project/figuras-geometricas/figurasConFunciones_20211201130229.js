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
  const alturaTriangulo = Math.sqrt(
    ladoTriangulo1 ** 2 - (baseTriangulo / 2) ** 2
  );
  return (base * altura) / 2;
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
function calcularAreaTriangulo() {
  const inputAltura = document.getElementById("inputAltura");
  const valueAltura = Number(inputAltura.value);
  const inputBase = document.getElementById("inputBase");
  const valueBase = inputBase.value;
  const area = areaTriangulo(valueAltura, valueBase);
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
