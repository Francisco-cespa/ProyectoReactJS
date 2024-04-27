import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

// const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState();

  const clear = () => setItems([]);

  const addItem = (item) => setItems((prev) => [...prev, item]);

  const cantidadEnCarrito = () => {
    return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
  };

  const precioTotal = () => {
    return carrito.reduce((acc, prod) => acc + prod.price * prod.cantidad, 0);
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  // useEffect(() => {
  //   localStorage.setItem("carrito", JSON.stringify(carrito));
  // }, [carrito]);

  return (
    <CartContext.Provider
      value={{
        addItem,
        clear,
        carrito,
        setCarrito,
        cantidadEnCarrito,
        precioTotal,
        vaciarCarrito,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
