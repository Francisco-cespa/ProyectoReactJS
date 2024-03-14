import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { ItemListContainer } from "./components/ItemListContainer";
import { NavBar } from "./components/Navbar";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container className="body">
      <NavBar />
      <ItemListContainer greeting="Arte Suave" />
    </Container>
  );
}

export default App;
