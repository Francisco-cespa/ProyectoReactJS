import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { NavBar } from "./components/Navbar";
import { Container } from "react-bootstrap";

import { useEffect } from "react";
import { CartProvider } from "./context/CartContext";
import Carrito from "./components/Carrito";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Container className="body">
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:id" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="*" element={404} />
          </Routes>
        </Container>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
