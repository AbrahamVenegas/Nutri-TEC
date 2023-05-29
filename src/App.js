import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LoginNutri } from "./pages/LoginNutri";
import { LoginCliente } from "./pages/LoginCliente";
import { RegisterNutri } from "./pages/RegistroNutri";


function App() {

  return (
    <>
    <Router>
        <Routes>
          <Route path="/" element={<LoginNutri />} /> {/* LoginNutri */}
          <Route path="/LoginCliente" element={<LoginCliente />} />
          <Route path="/RegisterNutri" element={<RegisterNutri />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
