import Navbar from "./features/Navbar";
import Container from "./features/Container"; 
import Home from "./features/Home";
import { Fragment } from "react/jsx-runtime";

function App() {
  return (
      <>
    <Navbar />
    <Container>
      <Home />
    </Container>
    </>
  );
}

export default App;
