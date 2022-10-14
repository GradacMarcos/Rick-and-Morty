import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Episodios from "./pages/episodios";
import Inicio from "./pages/inicio";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/episodios" element={<Episodios />} />
      </Routes>
    </Router>
  );
}

export default App;
