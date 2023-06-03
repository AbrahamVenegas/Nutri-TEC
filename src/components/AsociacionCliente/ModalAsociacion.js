import React, { useState, useEffect } from "react";
import { Form, FormGroup, Modal, ModalBody, ModalHeader, ModalFooter, Button } from "react-bootstrap";

// Estado inicial de la informacion 
const modeloAsociacion = {
    indice: 0,
    plan: "",
    fecha_inicio: "",
    fecha_fin: "",
    total_calorias: "",
}

const ModalAsociacion = ({ mostrarModal, setMostrarModal, agregarListaPaciente,
    editar, setEditar, editarPacientes }) => {

    const [asociacion, setAsociacion] = useState(modeloAsociacion);

    // Toda la informacion de los inputs se actualiza en la costante del estado inicial
    const actualizarDato = (e) => {
        console.log(e.target.name + " : " + e.target.value)
        setAsociacion(
            {
                ...asociacion,
                [e.target.name]: e.target.value
            }
        )
    }

    // Se guarda los datos de los inputs y se envia para hacer el POST o PUT
    const enviarDatos = () => {
        if (asociacion.indice == 0) {
            agregarListaPaciente(asociacion)
        } else {
            editarPacientes(asociacion)
        }

        setAsociacion(modeloAsociacion);
    }

    useEffect(() => {
        if (editar != null) {
            setAsociacion(editar)
        } else {
            setAsociacion(modeloAsociacion)
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
                {asociacion.indice == 0 ? "Nueva Asociacion" : "Nueva Asociacion"}
            </ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Form.Label>Asociar Paciente</Form.Label>
                        <Form.Select
                            name="plan"
                            onChange={(e) => actualizarDato(e)} value={asociacion.id}>
                            <option>
                                {asociacion.id}
                            </option>
                        </Form.Select>
                    </FormGroup>
                    <FormGroup>
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Nombre"
                            name="nombre"
                            disabled
                            onChange={(e) => actualizarDato(e)} value={asociacion.name} />
                    </FormGroup>
                    <FormGroup>
                        <Form.Label>Primer apellido</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Primer apellido"
                            name="apellido1"
                            disabled
                            onChange={(e) => actualizarDato(e)} value={asociacion.apellido1} />
                    </FormGroup>
                    <FormGroup>
                        <Form.Label>Segundo Apellido</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Segundo Apellido"
                            name="apellido2"
                            disabled
                            onChange={(e) => actualizarDato(e)} value={asociacion.apellido2} />
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

export default ModalAsociacion;