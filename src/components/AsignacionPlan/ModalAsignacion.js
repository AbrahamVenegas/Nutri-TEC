import React, { useState, useEffect } from "react";
import { Form, FormGroup, Modal, ModalBody, ModalHeader, ModalFooter, Button } from "react-bootstrap";

// Estado inicial de la informacion 
const modeloAsignacion = {
    indice: 0,
    plan: "",
    fecha_inicio: "",
    fecha_fin: "",
    total_calorias: "",
}

const ModalAsignacion = ({ mostrarModal, setMostrarModal, guardarAsignacion,
    editar, setEditar, editarAsignacion }) => {

    const [asignacion, setAsignacion] = useState(modeloAsignacion);

    // Toda la informacion de los inputs se actualiza en la costante del estado inicial
    const actualizarDato = (e) => {
        console.log(e.target.name + " : " + e.target.value)
        setAsignacion(
            {
                ...asignacion,
                [e.target.name]: e.target.value
            }
        )
    }

    // Se guarda los datos de los inputs y se envia para hacer el POST o PUT
    const enviarDatos = () => {
        if (asignacion.indice == 0) {
            guardarAsignacion(asignacion)
        } else {
            editarAsignacion(asignacion)
        }

        setAsignacion(modeloAsignacion);
    }

    useEffect(() => {
        if (editar != null) {
            setAsignacion(editar)
        } else {
            setAsignacion(modeloAsignacion)
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
                {asignacion.indice == 0 ? "Nueva Asignacion" : "Nueva Asignacion"}
            </ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Form.Label>Id</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Id"
                            name="id"
                            disabled
                            onChange={(e) => actualizarDato(e)} value={asignacion.id} />
                    </FormGroup>
                    <FormGroup>
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Nombre"
                            name="nombre"
                            disabled
                            onChange={(e) => actualizarDato(e)} value={asignacion.name} />
                    </FormGroup>
                    <FormGroup>
                        <Form.Label>Primer apellido</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Primer apellido"
                            name="apellido1"
                            disabled
                            onChange={(e) => actualizarDato(e)} value={asignacion.apellido1} />
                    </FormGroup>
                    <FormGroup>
                        <Form.Label>Segundo Apellido</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Segundo Apellido"
                            name="apellido2"
                            disabled
                            onChange={(e) => actualizarDato(e)} value={asignacion.apellido2} />
                    </FormGroup>
                    <FormGroup>
                        <Form.Label>Plan</Form.Label>
                        <Form.Select
                            name="plan"
                        //onChange={(e) => actualizarDato(e)} value={asignacion.name}
                        >
                            <option>
                                {asignacion.name}
                            </option>
                        </Form.Select>
                    </FormGroup>
                    <FormGroup>
                        <Form.Label>Total de calorias</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Total de calorias"
                            name="total_calorias"
                            disabled
                            onChange={(e) => actualizarDato(e)} value={asignacion.total_calorias} />
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

export default ModalAsignacion;