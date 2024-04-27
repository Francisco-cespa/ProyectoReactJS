import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const Carrito = () => {
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

  const handleVaciar = () => {
    return vaciarCarrito();
  };

  return (
    <div className="container">
      <h1>carrito</h1>
      {carrito.map((prod) => (
        <div key={prod.id}>
          <h3>{prod.title}</h3>
          <p>Precio unidad: ${prod.price}</p>
          <p>Precio total: ${prod.cantidad * prod.price}</p>
          <p>Cantidad: {prod.cantidad}</p>
        </div>
      ))}
      <h2>Precio total: ${precioTotal()} </h2>
      <button onClick={handleVaciar}> Vaciar Carrito.</button>
    </div>
  );
};

export default Carrito;
