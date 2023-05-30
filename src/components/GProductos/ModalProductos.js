import React, { useState, useEffect } from "react";
import { Form, FormGroup, Modal, ModalBody, ModalHeader, ModalFooter, Button } from "react-bootstrap";

// Estado inicial de la informacion 
const modeloProductos = {
    serie: 0,
    codigo_barras: "",
    descripcion: "",
    porcion: "",
    energia: "",
    grasa: "",
    sodio: "",
    carbohidratos: "",
    proteina: "",
    vitaminas: "",
    calcio: "",
    hierro: "",
}


const ModalProductos = ({ mostrarModal, setMostrarModal, guardarProductos,
    editar, setEditar, editarProductos }) => {

    const [productos, setProductos] = useState(modeloProductos);

    // Toda la informacion de los inputs se actualiza en la costante del estado inicial
    const actualizarDato = (e) => {
        setProductos(
            {
                ...productos,
                [e.target.name]: e.target.value
            }
        )
    }

    // Se guarda los datos de los inputs y se envia para hacer el POST o PUT
    const enviarDatos = () => {
        if (productos.serie == 0) {
            guardarProductos(productos)
        } else {
            editarProductos(productos)
        }
        setProductos(modeloProductos);
    }

    useEffect(() => {
        if (editar != null) {
            setProductos(editar)
        } else {
            setProductos(modeloProductos)
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
                {productos.serie == 0 ? "Nuevo producto" : "Editar producto"}
            </ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Form.Label>Código de barras</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Código de barras"
                            name="codigo_barras"
                            onChange={(e) => actualizarDato(e)} value={productos.codigo_barras}
                        />
                        <Form.Label>Descripcion del producto</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Descripcion del producto"
                            name="descripcion"
                            onChange={(e) => actualizarDato(e)} value={productos.descripcion}
                        />
                        <Form.Label>Porción</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Porción en (g/ml)"
                            name="porcion"
                            onChange={(e) => actualizarDato(e)} value={productos.porcion}
                        />
                        <Form.Label>Energía</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Energía en (Kcal)"
                            name="energia"
                            onChange={(e) => actualizarDato(e)} value={productos.energia}
                        />
                        <Form.Label>Grasa</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Grasa en (g)"
                            name="grasa"
                            onChange={(e) => actualizarDato(e)} value={productos.grasa}
                        />
                        <Form.Label>Sodio</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Sodio en (mg)"
                            name="sodio"
                            onChange={(e) => actualizarDato(e)} value={productos.sodio}
                        />
                        <Form.Label>Carbohidratos</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Carbohidratos en (g)"
                            name="carbohidratos"
                            onChange={(e) => actualizarDato(e)} value={productos.carbohidratos}
                        />
                        <Form.Label>Proteína</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Proteína en (g)"
                            name="proteina"
                            onChange={(e) => actualizarDato(e)} value={productos.proteina}
                        />
                        <Form.Label>Vitaminas</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Vitaminas"
                            name="vitaminas"
                            onChange={(e) => actualizarDato(e)} value={productos.vitaminas}
                        />
                        <Form.Label>Calcio</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Calcio en (mg)"
                            name="calcio"
                            onChange={(e) => actualizarDato(e)} value={productos.calcio}
                        />
                        <Form.Label>Hierro</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Hierro en (mg)"
                            name="hierro"
                            onChange={(e) => actualizarDato(e)} value={productos.hierro}
                        />
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

export default ModalProductos;