import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Presentacion from "./pages/presentacion";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/presentacion" element={<Presentacion />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;