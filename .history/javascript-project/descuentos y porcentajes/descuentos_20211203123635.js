function calculoPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
  return precio, precioConDescuento;
}

/* Calculo el porcentaje final que PAGARA el cliente */

console.log(
  `El precio original es. El precio que pagarás es ${precioConDescuento}`
);
