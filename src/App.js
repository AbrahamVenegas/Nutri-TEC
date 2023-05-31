import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LoginNutri } from "./pages/LoginNutri";
import { LoginCliente } from "./pages/LoginCliente";
import { RegisterNutri } from "./pages/RegistroNutri";
import RegistroMedidas from "./pages/registroMedidas";
import RegistroConsumo from "./pages/registroConsumo";
import GestionProdcutos from "./pages/GestionProductos";


function App() {

  return (
    <>
    <Router>
        <Routes>
          <Route path="/" element={<LoginNutri />} /> {/* LoginNutri */}
          <Route path="/LoginCliente" element={<LoginCliente />} />
          <Route path="/RegisterNutri" element={<RegisterNutri />} />
          <Route path="/Medidas" element={<RegistroMedidas />} />
          <Route path="/consumo" element={<RegistroConsumo />} />
          <Route path="/productos" element={<GestionProdcutos />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
