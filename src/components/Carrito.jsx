import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { collection, getFirestore, addDoc } from "firebase/firestore";

const initialValues = {
  name: "",
  phone: "",
  email: "",
};

export const Carrito = () => {
  const { carrito, precioTotal, vaciarCarrito, removeItem } =
    useContext(CartContext);

  const [buyer, setBuyer] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBuyer((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleOrder = () => {
    const order = {
      buyer: buyer,
      items: carrito,
      total: precioTotal(),
    };

    const db = getFirestore();
    const orderCollection = collection(db, "orders");

    addDoc(orderCollection, order).then(({ id }) => {
      if (id) {
        alert("Su orden: " + id + " ha sido completada!");
        handleVaciar();
      }
    });
  };

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
          <button onClick={() => removeItem(prod.id)}>Eliminar</button>
        </div>
      ))}
      <h2>Precio total: ${precioTotal()} </h2>
      <button onClick={handleVaciar}> Vaciar Carrito.</button>

      <h2>Datos personales.</h2>
      <form>
        <div className="mt-2">
          <label>Nombre:</label>
          <input
            className="ml-2"
            type="text"
            value={buyer.name}
            name="name"
            onChange={handleChange}
          />
        </div>
        <div className="mt-2">
          <label>Teléfono:</label>
          <input
            className="ml-2"
            type="number"
            value={buyer.phone}
            name="phone"
            onChange={handleChange}
          />
        </div>
        <div className="mt-2">
          <label>Email:</label>
          <input
            className="ml-2"
            type="email"
            value={buyer.email}
            name="email"
            onChange={handleChange}
          />
        </div>
      </form>

      <button onClick={handleOrder}>comprar</button>
    </div>
  );
};

export default Carrito;
