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
//Esta funcion es la que llamaremos cuando tocamos el boton
//tomamos los valores puestos en los input
function calculateDiscountPrice() {
  const inputPrice = document.getElementById("inputPrice");
  const priceValue = inputPrice.value;
  const inputCoupon = document.getElementById("inputCoupon");
  const couponValue = inputCoupon.value;
  // Esta funcion validara si coupon name es igual a coupon value, solo se ejecuta cuando la llamo

  const isCouponValueValid = function (coupon) {
    return coupon.name === couponValue;
  };
  //recorreremos el array de cupones para ver si lo introducido en el input corresponde a un cupon valido mediante la funcion anterior y lo almacenamos en una constante
  const userCoupon = coupons.find(isCouponValueValid);
  //si no corresponde nos da un alert. Pero si es valido, la propiedad discount se la asigno a descuento y ejecuto las funciones para calcular
  //finalmente lo traslado al html
  if (!userCoupon) {
    alert(`El cupón ${couponValue} no es válido`);
  } else {
    const descuento = userCoupon.discount;
    const precioConDescuento = calculoPrecioConDescuento(priceValue, descuento);
    const resultFunction = document.getElementById("ResultFunction");
    resultFunction.innerText = `El precio con descuento es: ${precioConDescuento}`;
  }
}
