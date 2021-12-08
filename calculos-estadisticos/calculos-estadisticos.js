let datos = [];
function agregarElemento() {
  dato = document.getElementById("inputNumber");
  datoValue = Number(dato.value);
  datos.push(datoValue);
  formulario.reset(); //reseteo el input para poder escribir otro valor. formulario es el id del input
  return false; //return es false para que no recargue la pagina
}
function mostrarArray() {
  let resultado = document.getElementById("arrayDeNumeros");
  resultado.innerHTML = ""; //necesito que al principio sea vacio
  for (const dato of datos) {
    let datoParrafo = document.createElement("p");
    datoParrafo.innerText = dato;
    resultado.appendChild(datoParrafo);
  } //el for of me crea una variable por cada posicion del array que va a ser escrita en cada p.
}
function calculateMedia(datos) {
  /* let suma = 0;
  for (let i = 0; i < lista.length; i++) {
    suma = suma + lista[i];
  } */

  //Uso el reduce que permite recorrer el array y en este caso sumar
  let suma = datos.reduce(
    /* Por defecto le doy un valor de 0 porque es la primer iteracion */
    function (valorAcumulado = 0, nuevoElemento) {
      return valorAcumulado + nuevoElemento;
    }
  );
  const promedio = suma / datos.length;
  return promedio;
}

//mediana
function calculateMediana(datos) {
  const datosOrdenados = datos.sort(function (primerElemento, segundoElemento) {
    return primerElemento - segundoElemento;
  });
  const mitadLista = parseInt(datosOrdenados.length / 2);
  function esPar(numero) {
    if (numero % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }
  let mediana;
  if (esPar(datosOrdenados.length)) {
    const elemento1 = datosOrdenados[mitadLista];
    const elemento2 = datosOrdenados[mitadLista - 1];
    const promedioElemento1y2 = calculateMedia([elemento1, elemento2]);
    mediana = promedioElemento1y2;
    return mediana;
  } else {
    mediana = datosOrdenados[mitadLista];
    return mediana;
  }
}
//moda
function calculateModa(datos) {
  const datosCount = {};
  datos.map(function (elemento) {
    if (datosCount[elemento]) {
      datosCount[elemento] += 1;
    } else {
      datosCount[elemento] = 1;
    }
  });
  const datosArray = Object.entries(datosCount).sort(function (
    valorAcumulado,
    nuevoElemento
  ) {
    return valorAcumulado[1] - nuevoElemento[1];
  });
  const moda = datosArray[datosArray.length - 1];
  console.log(moda, datosCount, datosArray);
  return moda;
}
