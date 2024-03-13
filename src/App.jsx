import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { ItemListContainer } from "./components/ItemListContainer";
import { NavBar } from "./components/Navbar";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="HOLA MUNDO" />
    </>
  );
}

export default App;
