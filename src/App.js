import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./pages/inicio";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
      </Routes>
    </Router>
  );
}

export default App;
