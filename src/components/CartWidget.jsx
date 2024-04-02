import { useState } from "react";
import cart from "../assets/carrito-de-compras.png";

export const numero = () => {
  const [numero, setNumero] = useState(0);
  return (
    <button onClick={() => setNumero(numero + 1)}> {numero} numero</button>
  );
};

// ejemplo de button

export const CartWidget = () => {
  return (
    <>
      <img src={cart} alt="carrito" height="50px" width="50px" />
      <span className="contador">{numero()}</span>
    </>
  );
};
