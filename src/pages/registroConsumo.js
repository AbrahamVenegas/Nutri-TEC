import React, { useState } from 'react';
import { Table, Form, Button } from 'react-bootstrap';

const RegistroConsumo = () => {
  const [productos, setProductos] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [filtro, setFiltro] = useState('nombre');
  const [desayuno, setDesayuno] = useState('');
  const [meriendaManana, setMeriendaManana] = useState('');
  const [almuerzo, setAlmuerzo] = useState('');
  const [meriendaTarde, setMeriendaTarde] = useState('');
  const [cena, setCena] = useState('');


  const onChangeBusqueda = (event) => {
    setBusqueda(event.target.value);
  };

  const onChangeFiltro = (event) => {
    setFiltro(event.target.value);
    setBusqueda('');
  };

  const onChangeFecha = (event) => {
    const selectedOption = event.target.value;
    console.log(selectedOption);
  };

  const handlePostTiempoConsumo = async () => {
    const currentDate = new Date();
    const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;

    const requestBody = {
      idCliente: 1,
      fecha: formattedDate,
      desayuno: desayuno,
      meriendaMañana: meriendaManana,
      almuerzo: almuerzo,
      meriendaTarde: meriendaTarde,
      cena: cena,
    };

    try {
      await fetch('https://nutritec-api-postgres.azurewebsites.net/api/Consumo/Post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });
      console.log('Tiempos de consumo enviados exitosamente');
      setDesayuno('');
      setMeriendaManana('');
      setAlmuerzo('');
      setMeriendaTarde('');
      setCena('');
    } catch (error) {
      console.log('Error al enviar los tiempos de consumo:', error);
    }
  };

  const handleSearch = async () => {
    try {
      let url;
      if (filtro === 'nombre') {
        url = `https://nutritec-api-postgres.azurewebsites.net/api/Producto/Get_Descripcion?descripcion=${busqueda}`;
      } else if (filtro === 'codigo') {
        url = `https://nutritec-api-postgres.azurewebsites.net/api/Producto/Get_CodigoBarras?codigo=${busqueda}`;
      }

      const response = await fetch(url);
      const data = await response.json();
      setProductos(data);
      console.log(productos)
    } catch (error) {
      console.log('Error al obtener los productos:', error);
    }
  };

  return (
    <div className="container">
      <h2 className="my-4">Registro consumo</h2>
      <Form>
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
        <Button variant="primary" onClick={handleSearch}>Buscar</Button>
      </Form>
      <Table striped bordered>
        <thead>
          <tr>
            <th>Nombre del producto</th>
            <th>Código</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <tr key={producto.id}>
              <td>{producto.descripcion}</td>
              <td>{producto.codigoBarras}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div>
        <h3>Tiempos de consumo</h3>
        <Form.Group controlId="desayuno">
          <Form.Label>Desayuno:</Form.Label>
          <Form.Control type="text" onChange={(e) => setDesayuno(e.target.value)} value={desayuno} />
        </Form.Group>

        <Form.Group controlId="meriendaManana">
          <Form.Label>Merienda mañana:</Form.Label>
          <Form.Control type="text" onChange={(e) => setMeriendaManana(e.target.value)} value={meriendaManana} />
        </Form.Group>

        <Form.Group controlId="almuerzo">
          <Form.Label>Almuerzo:</Form.Label>
          <Form.Control type="text" onChange={(e) => setAlmuerzo(e.target.value)} value={almuerzo} />
        </Form.Group>

        <Form.Group controlId="meriendaTarde">
          <Form.Label>Merienda tarde:</Form.Label>
          <Form.Control type="text" onChange={(e) => setMeriendaTarde(e.target.value)} value={meriendaTarde} />
        </Form.Group>

        <Form.Group controlId="cena">
          <Form.Label>Cena:</Form.Label>
          <Form.Control type="text" onChange={(e) => setCena(e.target.value)} value={cena} />
        </Form.Group>
        <Button variant="primary" onClick={handlePostTiempoConsumo}>Enviar tiempos de consumo</Button>
        

      </div>
    </div>
  );
};

export default RegistroConsumo;
