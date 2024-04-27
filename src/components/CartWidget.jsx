import { useContext } from "react";
import cart from "../assets/carrito-de-compras.png";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export const CartWidget = () => {
  const { cantidadEnCarrito } = useContext(CartContext);

  return (
    <>
      <Link className="menu-link" to="/carrito">
        <img src={cart} alt="carrito" height="50px" width="50px" />
      </Link>
      <span className="numerito">{cantidadEnCarrito()}</span>
    </>
  );
};
