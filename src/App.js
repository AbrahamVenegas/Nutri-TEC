import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LoginNutri } from "./pages/LoginNutri";
import { LoginCliente } from "./pages/LoginCliente";
import { RegisterNutri } from "./pages/RegistroNutri";
import RegistroMedidas from "./pages/registroMedidas";
import RegistroConsumo from "./pages/registroConsumo";
import GestionProdcutos from "./pages/GestionProductos";
import { RegisterCliente } from "./pages/RegisterCliente";
import GProductos from "./pages/GProductos";
import GPlanes from "./pages/GPlanes";
import AsociacionCliente from "./pages/AsociacionCliente";
import AsignacionPlan from "./pages/AsignacionPlan";
import SeguimientoPaciente from "./pages/SeguimientoPaciente";
import GenerarReporte from "./pages/generarReporte";
import GestionAprobacion from "./pages/GestionAprobacion";
import GestionRecetas from "./pages/gestionRecetas";


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginNutri />} /> {/* LoginNutri */}
          <Route path="/RegisterNutri" element={<RegisterNutri />} />
          <Route path="/GProductos" element={<GProductos />} />
          <Route path="/AsociacionCliente" element={<AsociacionCliente />} />
          <Route path="/GPlanes" element={<GPlanes />} />
          <Route path="/AsignacionPlan" element={<AsignacionPlan />} />
          <Route path="/SeguimientoPaciente" element={<SeguimientoPaciente />} />
          <Route path="/GenerarReporte" element={<GenerarReporte />} />

          <Route path="/LoginCliente" element={<LoginCliente />} />
          <Route path="/RegisterCliente" element={<RegisterCliente />} />
          <Route path="/Medidas" element={<RegistroMedidas />} />
          <Route path="/consumo" element={<RegistroConsumo />} />
          <Route path="/productos" element={<GestionProdcutos />} />

          <Route path="/aprobacionproductos" element={<GestionAprobacion />} />
          <Route path="/gestionrecetas" element={<GestionRecetas />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
