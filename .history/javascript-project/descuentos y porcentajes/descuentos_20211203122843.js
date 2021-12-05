const precioOriginal = 100;
const descuento = 15;

const porcentajePrecioConDescuento = 100 - descuento;
const precioConDescuento =
  precioOriginal - (precioOriginal * porcentajePrecioConDescuento) / 100;

console.log(
  `El precio original es ${precioOriginal}. El precio que pagarás es ${precioConDescuento}`
);
