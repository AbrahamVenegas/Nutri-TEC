import React, { useState } from 'react';
import { Table, Button } from 'react-bootstrap';

const GestionAprobacion = () => {
  const [productos, setProductos] = useState([
    { id: 1, producto: 'Producto 1', estado: 'Sin aprobar' },
    { id: 2, producto: 'Producto 2', estado: 'Aprobado' },
    { id: 3, producto: 'Producto 3', estado: 'Sin aprobar' },
  ]);

  const handleAprobar = (id) => {
    setProductos((prevProductos) => {
      return prevProductos.map((producto) => {
        if (producto.id === id && producto.estado !== 'Aprobado') {
          return { ...producto, estado: 'Aprobado' };
        }
        return producto;
      });
    });
  };

  return (
    <div className="container">
      <h2 className="my-4">Gestión de Productos</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <tr key={producto.id}>
              <td>{producto.producto}</td>
              <td>{producto.estado}</td>
              <td>
                <Button
                  variant="primary"
                  disabled={producto.estado === 'Aprobado'}
                  onClick={() => handleAprobar(producto.id)}
                >
                  Aprobar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default GestionAprobacion;
