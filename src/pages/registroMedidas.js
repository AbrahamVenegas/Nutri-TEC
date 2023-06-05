import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegistroMedidas = () => {
    const [planillas, setPlanillas] = useState([]);
    const [descripcion, setDescripcion] = useState('');
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

    useEffect(() => {
        // Obtener las planillas mediante una solicitud GET al API
        fetchPlanillas();
    }, []);

    const fetchPlanillas = async () => {
        try {
            const response = await fetch('URL_DEL_API/planillas');
            const data = await response.json();
            setPlanillas(data);
        } catch (error) {
            console.error(error);
        }
    };

    const agregarPlanilla = async () => {
        try {
            const response = await fetch('URL_DEL_API/planillas', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    cintura: medidas.cintura,
                    cuello: medidas.cuello,
                    caderas: medidas.caderas,
                    porcentajeMusculo: medidas.porcentajeMusculo,
                    porcentajeGrasa: medidas.porcentajeGrasa,
                    fecha: medidas.fecha
                })
            });
            const data = await response.json();
            if (response.ok) {
                setPlanillas([...planillas, data]);
                toast.success('Planilla agregada exitosamente');
                handleModalClose();
            } else {
                toast.error('Error al agregar la planilla');
            }
        } catch (error) {
            console.error(error);
        }
    };

    const editarPlanilla = async () => {
        try {
            const response = await fetch(`URL_DEL_API/planillas/${planillaId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    cintura: medidas.cintura,
                    cuello: medidas.cuello,
                    caderas: medidas.caderas,
                    porcentajeMusculo: medidas.porcentajeMusculo,
                    porcentajeGrasa: medidas.porcentajeGrasa,
                    fecha: medidas.fecha
                })
            });
            const data = await response.json();
            if (response.ok) {
                const updatedPlanillas = planillas.map(planilla => {
                    if (planilla.id === planillaId) {
                        return {
                            ...planilla,
                            cintura: data.cintura,
                            cuello: data.cuello,
                            caderas: data.caderas,
                            porcentajeMusculo: data.porcentajeMusculo,
                            porcentajeGrasa: data.porcentajeGrasa,
                            fecha: data.fecha
                        };
                    }
                    return planilla;
                });
                setPlanillas(updatedPlanillas);
                toast.success('Planilla actualizada exitosamente');
                handleModalClose();
            } else {
                toast.error('Error al actualizar la planilla');
            }
        } catch (error) {
            console.error(error);
        }
    };

    const eliminarPlanilla = async (id) => {
        try {
            const response = await fetch(`URL_DEL_API/planillas/${id}`, {
                method: 'DELETE'
            });
            if (response.ok) {
                const updatedPlanillas = planillas.filter(planilla => planilla.id !== id);
                setPlanillas(updatedPlanillas);
                toast.success('Planilla eliminada exitosamente');
            } else {
                toast.error('Error al eliminar la planilla');
            }
        } catch (error) {
            console.error(error);
        }
    };

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
                            <Form.Label>Cintura:</Form.Label>
                            <Form.Control
                                type="number"
                                value={medidas.cintura}
                                onChange={e => setMedidas({ ...medidas, cintura: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group controlId="cuello">
                            <Form.Label>Cuello:</Form.Label>
                            <Form.Control
                                type="number"
                                value={medidas.cuello}
                                onChange={e => setMedidas({ ...medidas, cuello: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group controlId="caderas">
                            <Form.Label>Caderas:</Form.Label>
                            <Form.Control
                                type="number"
                                value={medidas.caderas}
                                onChange={e => setMedidas({ ...medidas, caderas: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group controlId="porcentajeMusculo">
                            <Form.Label>Porcentaje de Músculo:</Form.Label>
                            <Form.Control
                                type="number"
                                value={medidas.porcentajeMusculo}
                                onChange={e => setMedidas({ ...medidas, porcentajeMusculo: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group controlId="porcentajeGrasa">
                            <Form.Label>Porcentaje de Grasa:</Form.Label>
                            <Form.Control
                                type="select"
                                value={medidas.porcentajeGrasa}
                                onChange={e => setMedidas({ ...medidas, porcentajeGrasa: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group controlId="fecha">
                            <Form.Label>Fecha:</Form.Label>
                            <Form.Control
                                type="date"
                                value={medidas.fecha}
                                onChange={e => setMedidas({ ...medidas, fecha: e.target.value })}
                            />
                        </Form.Group>
                        
                        {planillaId === null ? (
                            <Button variant="primary" onClick={agregarPlanilla}>Agregar Planilla</Button>
                        ) : (
                            <Button variant="primary" onClick={editarPlanilla}>Editar Planilla</Button>
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
                        <th>Fecha</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {planillas.map((planilla) => (
                        <tr key={planilla.id}>
                            <td>{planilla.id}</td>
                            <td>{planilla.cintura}</td>
                            <td>{planilla.cuello}</td>
                            <td>{planilla.caderas}</td>
                            <td>{planilla.porcentajeMusculo}</td>
                            <td>{planilla.porcentajeGrasa}</td>
                            <td>{planilla.fecha}</td>
                            <td>
                                <Button variant="danger" onClick={() => eliminarPlanilla(planilla.id)}>Eliminar</Button>
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
                    <Button variant="primary" onClick={editarPlanilla}>Guardar Cambios</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default RegistroMedidas;

