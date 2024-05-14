import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

export const ItemCount = ({ item }) => {
  const { carrito, setCarrito } = useContext(CartContext);

  const [cantidad, setCantidad] = useState(1);

  const handleDecrease = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  const handleIncrease = () => {
    if (cantidad < item.stock) {
      setCantidad(cantidad + 1);
    }
  };

  const handleAdd = () => {
    const itemAgregado = { ...item, cantidad };
    setCantidad(1);
    const nuevoCarrito = [...carrito];
    const estaEnElCarrito = nuevoCarrito.find(
      (producto) => producto.id === itemAgregado.id
    );

    if (estaEnElCarrito) {
      estaEnElCarrito.cantidad = estaEnElCarrito.cantidad + cantidad;
    } else {
      nuevoCarrito.push(itemAgregado);
    }
    setCarrito(nuevoCarrito);
  };

  return (
    <div>
      <button onClick={handleDecrease}>-</button>
      <input value={cantidad} readOnly />
      <button onClick={handleIncrease}>+</button>
      <button onClick={handleAdd}>Agregar a carrito</button>
    </div>
  );
};
