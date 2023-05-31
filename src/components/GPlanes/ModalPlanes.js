import React, { useState, useEffect } from "react";
import { Form, FormGroup, Modal, ModalBody, ModalHeader, ModalFooter, Button } from "react-bootstrap";

// Estado inicial de la informacion 
const modeloPlanes = {
    indice: 0,
    desayuno: "",
    meriendaM: "",
    almuerzo: "",
    meriendaT: "",
    cena: "",
    nombre_plan: "",
    nutricionista: "",
    total_calorias: "",
}

const ModalPlanes = ({ mostrarModal, setMostrarModal, guardarPlanes,
    editar, setEditar, editarPlanes, dataProductos, dataNutricionista }) => {

    const [planes, setPlanes] = useState(modeloPlanes);

    // Toda la informacion de los inputs se actualiza en la costante del estado inicial
    const actualizarDato = (e) => {
        console.log(e.target.name + " : " + e.target.value)
        setPlanes(
            {
                ...planes,
                [e.target.name]: e.target.value
            }
        )
    }

    // Se guarda los datos de los inputs y se envia para hacer el POST o PUT
    const enviarDatos = () => {
        if (planes.indice == 0) {
            guardarPlanes(planes)
        } else {
            editarPlanes(planes)
        }

        setPlanes(modeloPlanes);
    }

    useEffect(() => {
        if (editar != null) {
            setPlanes(editar)
        } else {
            setPlanes(modeloPlanes)
        }
    }, [editar])

    // Se cierra el modal
    const cerrarModal = () => {
        setMostrarModal(!mostrarModal)
        setEditar(null)
    }

    return (
        <Modal show={mostrarModal} >
            <ModalHeader>
                {planes.indice == 0 ? "Nuevo plan" : "Editar plan"}
            </ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Form.Label>Desayuno</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Desayuno"
                            name="desayuno"
                            onChange={(e) => actualizarDato(e)} value={planes.desayuno} />
                    </FormGroup>
                    <FormGroup>
                        <Form.Label>Merienda Mañana</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Merienda Mañana"
                            name="meriendaM"
                            onChange={(e) => actualizarDato(e)} value={planes.meriendaM} />
                    </FormGroup>
                    <FormGroup>
                        <Form.Label>Almuerzo</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Almuerzo"
                            name="almuerzo"
                            onChange={(e) => actualizarDato(e)} value={planes.almuerzo} />
                    </FormGroup>
                    <FormGroup>
                        <Form.Label>Merienda Tarde</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Merienda Tarde"
                            name="meriendaT"
                            onChange={(e) => actualizarDato(e)} value={planes.meriendaT} />
                    </FormGroup>
                    <FormGroup>
                        <Form.Label>Cena</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Cena"
                            name="cena"
                            onChange={(e) => actualizarDato(e)} value={planes.cena} />
                    </FormGroup>
                    <FormGroup>
                        <Form.Label>Nombre Plan</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Nombre del plan"
                            name="nombre_plan"
                            onChange={(e) => actualizarDato(e)} value={planes.nombre_plan} />
                    </FormGroup>
                    {/* <FormGroup>
                        <Form.Label>Nutricionista</Form.Label>
                        <Form.Select
                            name="nutricionista"
                            onChange={(e) => actualizarDato(e)} value={planes.nutricionista}
                        >
                            {dataNutricionista.map(elemento => (
                                <option
                                    key={elemento.cedula}
                                    value={elemento.cedula}
                                >
                                    {dataNutricionista[elemento.cedula]}
                                </option>
                            ))}
                        </Form.Select>
                    </FormGroup> */}
                    <FormGroup>
                        <Form.Label>Total de calorias</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Total de calorias"
                            name="total_calorias"
                            disabled
                            onChange={(e) => actualizarDato(e)} value={planes.total_calorias} />
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button variant="primary" size="sm" onClick={enviarDatos}>Guardar</Button>
                <Button variant="danger" size="sm" onClick={cerrarModal}>Cerrar</Button>
            </ModalFooter>
        </Modal>
    )
}

export default ModalPlanes;