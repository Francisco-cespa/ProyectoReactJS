import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { NavBar } from "./components/Navbar";
import { Container } from "react-bootstrap";

function App() {
  return (
    <BrowserRouter>
      <Container className="body">
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="*" element={404} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
