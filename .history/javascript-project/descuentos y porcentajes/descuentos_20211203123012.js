const precioOriginal = 100;
const descuento = 15;

const porcentajePrecioConDescuento = 100 - descuento;
/* Calculo el porcentaje final que PAGARA el cliente */
const precioConDescuento =
  (precioOriginal * porcentajePrecioConDescuento) / 100;

console.log(
  `El precio original es ${precioOriginal}. El precio que pagarás es ${precioConDescuento}`
);
