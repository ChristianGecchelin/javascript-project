const precio = 100;
const descuento = 15;

function calculoPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
  return precioConDescuento;
}

/* Calculo el porcentaje final que PAGARA el cliente */
const precioConDescuento =
  (precioOriginal * porcentajePrecioConDescuento) / 100;

console.log(
  `El precio original es ${precioOriginal}. El precio que pagarás es ${precioConDescuento}`
);
