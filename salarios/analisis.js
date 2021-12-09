//helpers
function esPar(numerito) {
  if (numerito % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
function calculateMedia(lista) {
  let suma = lista.reduce(function (A = 0, B) {
    return A + B;
  });
  const promedio = suma / lista.length;
  return promedio;
}
//Calculadora de Medianas
function medianaSalarios(lista) {
  const mitad = parseInt(lista.length / 2);
  if (esPar(lista.length)) {
    const elemento1 = lista[mitad];
    const elemento2 = lista[mitad - 1];
    const mediana = calculateMedia([elemento1, elemento2]);
    return mediana;
  } else {
    const personitaMitad = lista[mitad];
    return personitaMitad;
  }
}
//MedianaGeneral
const salariosCol = colombia.map(function (personita) {
  return personita.salary;
});
const salariosColSorted = salariosCol.sort(function (salaryA, salaryB) {
  return salaryA - salaryB;
});

const medianaGeneralCol = medianaSalarios(salariosColSorted);

//Mediana Top 10%
//splice corta un array, hay que determinar 2 parametros, primero donde quiero que corte, y la cantidad de posiciones que quiero luego del corte
const spliceStart = salariosColSorted * 0.9;
const spliceCount = salariosColSorted.length - spliceStart;
const salariosColTop10 = salariosColSorted.splice(spliceStart, spliceCount);
const medianaTop10Col = medianaSalarios(salariosColTop10);
