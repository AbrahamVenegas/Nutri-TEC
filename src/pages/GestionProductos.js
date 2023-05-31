import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GestionProdcutos = () => {
    const [planillas, setPlanillas] = useState([]);
    const [descripcion, setDescripcion] = useState(['']);
    const [medidas, setMedidas] = useState({
        cintura: '',
        cuello: '',
        caderas: '',
        porcentajeMusculo: '',
        porcentajeGrasa: '',
        fecha: ''
    });
    const [planillaId, setPlanillaId] = useState(null);
    const [showModal, setShowModal] = useState(false);

    // Resto del código omitido por brevedad...

    const handleEditar = (id) => {
        const planillaEncontrado = planillas.find(planilla => planilla.id === id);
        setMedidas({
            cintura: planillaEncontrado.cintura,
            cuello: planillaEncontrado.cuello,
            caderas: planillaEncontrado.caderas,
            porcentajeMusculo: planillaEncontrado.porcentajeMusculo,
            porcentajeGrasa: planillaEncontrado.porcentajeGrasa,
            fecha: planillaEncontrado.fecha
        });
        setPlanillaId(id);
        setShowModal(true);
    };

    const handleModalClose = () => {
        setShowModal(false);
        setMedidas({
            cintura: '',
            cuello: '',
            caderas: '',
            porcentajeMusculo: '',
            porcentajeGrasa: '',
            fecha: ''
        });
        setPlanillaId(null);
    };

    return (
        <div className="container">
            <h2 className="my-4">Gestión de Planillas</h2>
            <div className="row mb-3">
                <div className="col-md-6">
                    <Form>
                        <Form.Group controlId="cintura">
                            <Form.Label>Codigo de barras:</Form.Label>
                            <Form.Control
                                type="number"
                                value={medidas.cintura}
                                onChange={e => setMedidas({ ...medidas, cintura: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group controlId="cuello">
                            <Form.Label>Descripción:</Form.Label>
                            <Form.Control
                                type="number"
                                value={medidas.cuello}
                                onChange={e => setMedidas({ ...medidas, cuello: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group controlId="caderas">
                            <Form.Label>Tamaño de la porción (g/mL):</Form.Label>
                            <Form.Control
                                type="number"
                                value={medidas.caderas}
                                onChange={e => setMedidas({ ...medidas, caderas: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group controlId="porcentajeMusculo">
                            <Form.Label>Energía (Kcal):</Form.Label>
                            <Form.Control
                                type="number"
                                value={medidas.porcentajeMusculo}
                                onChange={e => setMedidas({ ...medidas, porcentajeMusculo: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group controlId="porcentajeGrasa">
                            <Form.Label>Grasa (g):</Form.Label>
                            <Form.Control
                                type="number"
                                value={medidas.porcentajeGrasa}
                                onChange={e => setMedidas({ ...medidas, porcentajeGrasa: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group controlId="sodio">
                            <Form.Label>Sodio (mg):</Form.Label>
                            <Form.Control
                                type="number"
                                value={medidas.porcentajeGrasa}
                                onChange={e => setMedidas({ ...medidas, porcentajeGrasa: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group controlId="carbohidratos">
                            <Form.Label>carbohidratos (g):</Form.Label>
                            <Form.Control
                                type="number"
                                value={medidas.porcentajeGrasa}
                                onChange={e => setMedidas({ ...medidas, porcentajeGrasa: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group controlId="proteina">
                            <Form.Label>Proteína (g):</Form.Label>
                            <Form.Control
                                type="number"
                                value={medidas.porcentajeGrasa}
                                onChange={e => setMedidas({ ...medidas, porcentajeGrasa: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group controlId="vitaminas">
                            <Form.Label>Vitaminas :</Form.Label>
                            <Form.Control
                                type="number"
                                value={medidas.porcentajeGrasa}
                                onChange={e => setMedidas({ ...medidas, porcentajeGrasa: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group controlId="calcio">
                            <Form.Label>Calcio (mg):</Form.Label>
                            <Form.Control
                                type="number"
                                value={medidas.porcentajeGrasa}
                                onChange={e => setMedidas({ ...medidas, porcentajeGrasa: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group controlId="hierro">
                            <Form.Label>Hierro (mg):</Form.Label>
                            <Form.Control
                                type="number"
                                value={medidas.porcentajeGrasa}
                                onChange={e => setMedidas({ ...medidas, porcentajeGrasa: e.target.value })}
                            />
                        </Form.Group>
                        {planillaId === null ? (
                            <Button variant="primary" /*onClick={agregarPlanilla}*/>Agregar Planilla</Button>
                        ) : (
                            <Button variant="primary" onClick={() => setShowModal(true)}>Editar Planilla</Button>
                        )}
                    </Form>
                </div>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Cintura</th>
                        <th>Cuello</th>
                        <th>Caderas</th>
                        <th>Porcentaje de músculo</th>
                        <th>Porcentaje de grasa</th>
                        <th>ID</th>
                        <th>Cintura</th>
                        <th>Cuello</th>
                        <th>Caderas</th>
                        <th>Porcentaje de músculo</th>
                        <th>Porcentaje de grasa</th>
                    </tr>
                </thead>
                <tbody>
                    {planillas.map((planilla, index) => (
                        <tr key={index}>
                            <td>{planilla.id}</td>
                            <td>{planilla.descripcion}</td>
                            <td>
                                <Button variant="danger" /*onClick={() => eliminarPlanilla(planilla.id) </td>}*/>Eliminar</Button>
                                <Button variant="primary" onClick={() => handleEditar(planilla.id)}>Editar</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <Modal show={showModal} onHide={handleModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar Planilla</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="descripcion">
                            <Form.Label>Descripción:</Form.Label>
                            <Form.Control type="text" maxLength={50} value={descripcion} onChange={e => setDescripcion(e.target.value)} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleModalClose}>Cancelar</Button>
                    <Button variant="primary" /*onClick={editarPlanilla}*/>Guardar Cambios</Button>
                </Modal.Footer>
            </Modal>
        </div>

    );
};

export default GestionProdcutos;