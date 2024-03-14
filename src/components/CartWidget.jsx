import cart from "../assets/carrito-de-compras.png";

export const CartWidget = () => {
  return (
    <>
      <img src={cart} alt="carrito" height="50px" width="50px" />
      <span className="contador">0</span>
    </>
  );
};
