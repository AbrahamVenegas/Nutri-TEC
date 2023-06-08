import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GestionProdcutos = () => {
    const [planillas, setPlanillas] = useState([]);
    const [descripcion, setDescripcion] = useState(['']);
    const [productos, setProductos] = useState({
        codigo_barras: '',
        descripcion: '',
        tamano_porciones: '',
        energia: '',
        grasa: '',
        sodio: '',
        carbohidratos: '',
        proteina: '',
        vitaminas: '',
        calcio: '',
        hierro: '',
        aprobado: ''
    });
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


    const handleEditar = (id) => {
        const planillaEncontrado = planillas.find(planilla => planilla.id === id);
        setProductos({
            codigo_barras: planillaEncontrado.codigo_barras,
            descripcion: planillaEncontrado.descripcion,
            tamano_porciones: planillaEncontrado.tamano_porciones,
            energia: planillaEncontrado.energia,
            grasa: planillaEncontrado.grasa,
            sodio: planillaEncontrado.sodio,
            carbohidratos: planillaEncontrado.carbohidratos,
            proteina: planillaEncontrado.proteina,
            vitaminas: planillaEncontrado.vitaminas,
            calcio: planillaEncontrado.calcio,
            hierro: planillaEncontrado.hierro,
            aprobado: planillaEncontrado.aprobado
        });
        setPlanillaId(id);
        setShowModal(true);
    };

    const handleModalClose = () => {
        setShowModal(false);
        setProductos({
            codigo_barras: '',
            descripcion: '',
            tamano_porciones: '',
            energia: '',
            grasa: '',
            sodio: '',
            carbohidratos: '',
            proteina: '',
            vitaminas: '',
            calcio: '',
            hierro: '',
            aprobado: ''
        });
        setPlanillaId(null);
    };

    return (
        <div className="container">
            <h2 className="my-4">Gestión de Productos</h2>
            <div className="row mb-3">
                <div className="col-md-6">
                    <Form>
                        <Form.Group controlId="cintura">
                            <Form.Label>Codigo de barras:</Form.Label>
                            <Form.Control
                                type="number"
                                value={productos.cintura}
                                onChange={e => setProductos({ ...productos, cintura: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group controlId="cuello">
                            <Form.Label>Descripción:</Form.Label>
                            <Form.Control
                                type="number"
                                value={productos.cuello}
                                onChange={e => setProductos({ ...productos, cuello: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group controlId="caderas">
                            <Form.Label>Tamaño de la porción (g/mL):</Form.Label>
                            <Form.Control
                                type="number"
                                value={productos.caderas}
                                onChange={e => setProductos({ ...productos, caderas: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group controlId="energia">
                            <Form.Label>Energía (Kcal):</Form.Label>
                            <Form.Control
                                type="number"
                                value={productos.energia}
                                onChange={e => setProductos({ ...productos, energia: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group controlId="grasa">
                            <Form.Label>Grasa (g):</Form.Label>
                            <Form.Control
                                type="number"
                                value={productos.grasa}
                                onChange={e => setProductos({ ...productos, grasa: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group controlId="sodio">
                            <Form.Label>Sodio (mg):</Form.Label>
                            <Form.Control
                                type="number"
                                value={productos.sodio}
                                onChange={e => setProductos({ ...productos, sodio: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group controlId="carbohidratos">
                            <Form.Label>Carbohidratos (g):</Form.Label>
                            <Form.Control
                                type="number"
                                value={productos.carbohidratos}
                                onChange={e => setProductos({ ...productos, carbohidratos: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group controlId="proteina">
                            <Form.Label>Proteína (g):</Form.Label>
                            <Form.Control
                                type="number"
                                value={productos.proteina}
                                onChange={e => setProductos({ ...productos, proteina: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group controlId="vitaminas">
                            <Form.Label>Vitaminas :</Form.Label>
                            <Form.Control
                                type="number"
                                value={productos.vitaminas}
                                onChange={e => setProductos({ ...productos, vitaminas: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group controlId="calcio">
                            <Form.Label>Calcio (mg):</Form.Label>
                            <Form.Control
                                type="number"
                                value={productos.calcio}
                                onChange={e => setProductos({ ...productos, calcio: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group controlId="hierro">
                            <Form.Label>Hierro (mg):</Form.Label>
                            <Form.Control
                                type="number"
                                value={productos.hierro}
                                onChange={e => setProductos({ ...productos, hierro: e.target.value })}
                                style={{marginBottom: 20}}
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
                        <th>Codigo barras</th>
                        <th>Descripción</th>
                        <th>Tamaño porciones</th>
                        <th>Energía</th>
                        <th>Grasa</th>
                        <th>Sodio</th>
                        <th>Carbohidratos</th>
                        <th>Proteina</th>
                        <th>Vitaminas</th>
                        <th>Calcio</th>
                        <th>Hierro</th>
                        <th>Aprobado</th>
                    </tr>
                </thead>
                <tbody>
                    {planillas.map((planilla, index) => (
                        <tr key={index}>
                            <td>{planilla.codigo_barras}</td>
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