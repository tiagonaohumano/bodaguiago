import './components/LayoutStyles.css';
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Inicio from "./components/Layout";
import Transporte from "./components/Transporte";
import Alojamientos from "./components/Alojamientos";
import Regalos from "./components/Regalos";  
import Confirmacion from "./components/Confirmacion";




function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/confirmacion" element={<Confirmacion />} />
        <Route path="/transporte" element={<Transporte />} />
        <Route path="/alojamientos" element={<Alojamientos />} />
        <Route path="/regalos" element={<Regalos />} />
      </Routes>

    </div>
  );
}

export default App;
