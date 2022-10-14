import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Episodios from "./pages/episodios";
import Inicio from "./pages/inicio";
import Personajes from "./pages/personajes";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/episodios" element={<Episodios />} />
        <Route path="/personajes" element={<Personajes/>} />
      </Routes>
    </Router>
  );
}

export default App;
