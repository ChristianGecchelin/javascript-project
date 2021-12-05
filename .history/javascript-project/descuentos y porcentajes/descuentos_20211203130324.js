function calculoPrecioConDescuento(precio, descuento) {
  /* Calculo el porcentaje final que PAGARA el cliente */
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
  return console.log(
    `El precio original es ${precio}. El precio que pagarás es ${precioConDescuento}`
  );
}
function calculateDiscountPrice() {
  const inputPrice = document.getElementById("inputPrice");
  const inputDiscount = document.getElementById(inputDiscount);
}
