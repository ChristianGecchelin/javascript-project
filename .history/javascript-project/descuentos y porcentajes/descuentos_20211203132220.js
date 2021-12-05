function calculoPrecioConDescuento(precio, descuento) {
  /* Calculo el porcentaje final que PAGARA el cliente */
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
  return precioConDescuento
  );
}
function calculateDiscountPrice() {
  const inputPrice = document.getElementById("inputPrice");
  const priceValue = inputPrice.value;
  const inputDiscount = document.getElementById("inputDiscount");
  const discountValue = inputDiscount.value;
  const precioConDescuento = calculoPrecioConDescuento(
    priceValue,
    discountValue
  );

  console.log(precioConDescuento);
  const resultFunction = document.getElementById("resultFunction");
  resultFunction.innerText = `El precio con descuento es: ${precioConDescuento}`;
}
