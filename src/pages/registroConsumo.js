import React, { useState } from 'react';
import { Table, Form } from 'react-bootstrap';

const RegistroConsumo = () => {
  const [registros, setRegistros] = useState([
    { id: 1, nombre: 'Producto 1', codigo: 'ABC123' },
    { id: 2, nombre: 'Producto 2', codigo: 'DEF456' },
    { id: 3, nombre: 'Producto 3', codigo: 'GHI789' },
    { id: 4, nombre: 'Producto 4', codigo: 'JKL012' },
    { id: 5, nombre: 'Producto 5', codigo: 'MNO345' },
  ]);

  const [busqueda, setBusqueda] = useState('');
  const [filtro, setFiltro] = useState('nombre');

  const onChangeBusqueda = (event) => {
    setBusqueda(event.target.value);
  };

  const onChangeFiltro = (event) => {
    setFiltro(event.target.value);
    setBusqueda('');
  };

  const registrosFiltrados = registros.filter((registro) => {
    if (filtro === 'nombre') {
      return registro.nombre.toLowerCase().includes(busqueda.toLowerCase());
    } else if (filtro === 'codigo') {
      return registro.codigo.toLowerCase().includes(busqueda.toLowerCase());
    }
    return true;
  });

  const onChangeFecha = (event) => {
    const selectedOption = event.target.value;
    console.log(selectedOption);
  };

  return (
    <div className="container">
      <h2 className="my-4">Registro consumo</h2>
      <Form>
        <Form.Group controlId="fecha1">
          <Form.Label>Tiempo de consumo:</Form.Label>
          <Form.Control as="select" onChange={onChangeFecha}>
            <option value="Desayuno">Desayuno</option>
            <option value="MeriendaM">Merienda mañana</option>
            <option value="Almuerzo">Almuerzo</option>
            <option value="MeriendaT">Merienda tarde</option>
            <option value="Cena">Cena</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="busqueda">
          <Form.Label>Filtrar por:</Form.Label>
          <Form.Control as="select" value={filtro} onChange={onChangeFiltro}>
            <option value="nombre">Nombre</option>
            <option value="codigo">Código</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="campoBusqueda">
          <Form.Label>Buscar:</Form.Label>
          <Form.Control type="text" onChange={onChangeBusqueda} value={busqueda} />
        </Form.Group>
      </Form>
      <Table striped bordered>
        <thead>
          <tr>
            <th>Nombre del producto</th>
            <th>Código</th>
          </tr>
        </thead>
        <tbody>
          {registrosFiltrados.map((registro) => (
            <tr key={registro.id}>
              <td>{registro.nombre}</td>
              <td>{registro.codigo}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default RegistroConsumo;


