function calculoPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
  return console.log(
    `El precio original es ${precio}. El precio que pagarás es ${precioConDescuento}`
  );
}

/* Calculo el porcentaje final que PAGARA el cliente */
