import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const RecetaForm = () => {
  const [nombreReceta, setNombreReceta] = useState('');
  const [producto1, setProducto1] = useState('');
  const [porcion1, setPorcion1] = useState('');
  const [producto2, setProducto2] = useState('');
  const [porcion2, setPorcion2] = useState('');
  const [producto3, setProducto3] = useState('');
  const [porcion3, setPorcion3] = useState('');
  const [codigoBarras, setCodigoBarras] = useState('');

  const handleSubmit = () => {
    const descripcionCodificada = encodeURIComponent(nombreReceta);

    fetch(`https://nutritec-api-postgres.azurewebsites.net/api/Receta/SPHacerReceta?id_producto1=${producto1}&porcion1=${porcion1}&id_producto2=${producto2}&porcion2=${porcion2}&id_producto3=${producto3}&porcion3=${porcion3}&descripcion="${nombreReceta}"&codigo=${codigoBarras}`, {
      method: 'GET'
    })
      
      .then(response => response.json())
      .catch(error => {
        // Mostrar error.
        console.error('Este es el error:', error);
      });

  };

  return (
    <Form>
      <Form.Group controlId="formNombreReceta">
        <Form.Label>Nombre Receta</Form.Label>
        <Form.Control
          type="text"
          value={nombreReceta}
          onChange={e => setNombreReceta(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formProducto1">
        <Form.Label>Producto 1</Form.Label>
        <Form.Control
          type="text"
          value={producto1}
          onChange={e => setProducto1(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formPorcion1">
        <Form.Label>Porción 1</Form.Label>
        <Form.Control
          type="text"
          value={porcion1}
          onChange={e => setPorcion1(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formProducto2">
        <Form.Label>Producto 2</Form.Label>
        <Form.Control
          type="text"
          value={producto2}
          onChange={e => setProducto2(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formPorcion2">
        <Form.Label>Porción 2</Form.Label>
        <Form.Control
          type="text"
          value={porcion2}
          onChange={e => setPorcion2(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formProducto3">
        <Form.Label>Producto 3</Form.Label>
        <Form.Control
          type="text"
          value={producto3}
          onChange={e => setProducto3(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formPorcion3">
        <Form.Label>Porción 3</Form.Label>
        <Form.Control
          type="text"
          value={porcion3}
          onChange={e => setPorcion3(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formCodigoBarras">
        <Form.Label>Código de Barras</Form.Label>
        <Form.Control
          type="text"
          value={codigoBarras}
          onChange={e => setCodigoBarras(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" onClick={handleSubmit}>
        Enviar
      </Button>
    </Form>
  );
};

export default RecetaForm;
