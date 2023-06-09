import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';

function ReporteCobro() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://nutritec-api-postgres.azurewebsites.net/api/ReporteCobro/ObtenerReporteCobro')
      .then(response => response.json())
      .then(data => setData(data))
      
      .catch(error => console.log(error));
  }, []);

  return (
    console.log(data),
    <div className="container mt-4">
      <h1>Reporte de Cobros</h1>
      <Table striped bordered>
        <thead>
          <tr>
            <th>Email</th>
            <th>Nombre</th>
            <th>Apellido1</th>
            <th>Apellido2</th>
            <th>Tarjeta</th>
            <th>TipoCobro</th>
            <th>Monto</th>
            <th>MontoTotal</th>
            <th>Descuento</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.Email}</td>
              <td>{item.Nombre}</td>
              <td>{item.Apellido1}</td>
              <td>{item.Apellido2}</td>
              <td>{item.Tarjeta}</td>
              <td>{item.TipoCobro}</td>
              <td>{item.Monto}</td>
              <td>{item.MontoTotal}</td>
              <td>{item.Descuento}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default ReporteCobro;
