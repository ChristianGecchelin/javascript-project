/* function calculoPrecioConDescuento(precio, descuento) {
  -! Calculo el porcentaje final que PAGARA el cliente 
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
  return precioConDescuento;
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
*/
// Voy a relacionar los descuentos a cupones que el cliente puede aplicar para bajar el precio del producto
// 1° creo un array de objetos. propiedad: valor,
const coupons = [
  {
    name: "nuevo-socio",
    discount: 30,
  },
  { name: "primera-compra", discount: 15 },
  { name: "navidad", discount: 10 },
  {
    name: "cumpleaños",
    discount: 5,
  },
];
function calculoPrecioConDescuento(precio, descuento) {
  // Calculo el porcentaje final que PAGARA el cliente
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
  return precioConDescuento;
}
function calculateDiscountPrice() {
  const inputPrice = document.getElementById("inputPrice");
  const priceValue = inputPrice.value;
  const inputCoupon = document.getElementById("inputCoupon");
  const nameCoupon = inputCoupon.name;
}
