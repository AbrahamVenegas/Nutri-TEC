import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const RegistroMedidas = () => {
    const [planillas, setPlanillas] = useState([]);
    const [descripcion, setDescripcion] = useState('');
    const [planillaId, setPlanillaId] = useState(null);
    const [showModal, setShowModal] = useState(false);

    //Metodo GET
    const mostrarPlanilla = async () => {
        const response = await fetch("http://localhost:49146/api/planilla")

        if (response.ok) {
            const planillas = await response.json();
            setPlanillas(planillas)
        } else {
            console.log("Hubo un error")
        }
    }

    useEffect(() => {
        mostrarPlanilla()
    }, [])

    // Metodo POST
    const agregarPlanilla = () => {
        if (!descripcion) {
            alert('Debes completar la descripción de la planilla');
            return;
        }
        fetch('http://localhost:49146/api/planilla', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ descripcion: descripcion })
        })
            .then(response => response.json())
            .then(data => {
                const nuevoPlanilla = { id: data.id, descripcion: data.descripcion };
                setPlanillas([...planillas, nuevoPlanilla]);
                mostrarPlanilla();
                setDescripcion('');
            })
            .catch(error => console.error(error));
    };

    // Metodo PUT
    const editarPlanilla = () => {
        if (!descripcion) {
            alert('Debes completar la descripción de la planilla');
            return;
        }

        const planillaActualizada = { id: planillaId, descripcion };

        fetch('http://localhost:49146/api/planilla', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(planillaActualizada)
        })
            .then(response => response.json())
            .then(data => {
                const planillasActualizadas = planillas.map(planilla => {
                    if (planilla.id === data.id) {
                        return data;
                    }
                    return planilla;
                });
                setPlanillas(planillasActualizadas);
                mostrarPlanilla();
                setDescripcion('');
                setPlanillaId(null);
                setShowModal(false);
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Hubo un error al actualizar la planilla');
            });
    };


    // Metodo DELETE
    const eliminarPlanilla = (id) => {

        var respuesta = window.confirm("Esta seguro que quiere eliminar el dato?")

        if (!respuesta) {
            return;
        }

        fetch(`http://localhost:49146/api/planilla/${id}`, {
            method: 'DELETE'
        })
            .then(response => {
                if (response.ok) {
                    const planillasActualizados = planillas.filter(planilla => planilla.id !== id);
                    setPlanillas(planillasActualizados);
                    toast.success('Planilla eliminada correctamente');
                } else {
                    console.log("Hubo un error");
                }
            })
            .catch(error => console.error(error));
    };

    const handleEditar = (id) => {
        const planillaEncontrado = planillas.find(planilla => planilla.id === id);
        setDescripcion(planillaEncontrado.descripcion);
        setPlanillaId(id);
        setShowModal(true);
    };

    const handleModalClose = () => {
        setShowModal(false);
        setDescripcion('');
        setPlanillaId(null);
    };

    return (
        
            
            <div className="container">
                <h2 className="my-4">Gestión de Planillas</h2>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label htmlFor="descripcion" className="form-label">Descripción:</label>
                        <textarea
                            id="descripcion"
                            className="form-control"
                            maxLength={50}
                            value={descripcion}
                            onChange={e => setDescripcion(e.target.value)}
                        />
                        <small>{descripcion.length}/50 caracteres</small>
                    </div>
                    <div className="col-md-3 d-flex align-items-end">
                        {planillaId === null ? (
                            <Button variant="primary" onClick={agregarPlanilla}>Agregar Planilla</Button>
                        ) : (
                            <Button variant="primary" onClick={() => setShowModal(true)}>Editar Planilla</Button>
                        )}
                    </div>
                </div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Descripción</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {planillas.map((planilla, index) => (
                            <tr key={index}>
                                <td>{planilla.id}</td>
                                <td>{planilla.descripcion}</td>
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
