import React, { useState, useEffect } from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavbarNutri from "../components/NavbarNutri";
import TablaAsociacion from "../components/AsociacionCliente/TablaAsociacion";

const AsociacionCliente = () => {

    const [productos, setPaciente] = useState([]);

    const [mostrarModal, setMostrarModal] = useState(false);
    const [editar, setEditar] = useState(null);

    //Metodo GET
    const mostrarPacientes = async () => {
        async function fetchData() {
            try {
                const response = await fetch(''); //Falta el link
                const data = await response.json();
                setPaciente(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }

    useEffect(() => {
        mostrarPacientes()
    }, [])

    //Metodo POST
    const agregarListaPaciente = async (puesto) => {

        const datosproductos = await fetch("", { //Falta el link
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(puesto)
        })
        toast.success("Dato añadido con exito")

        if (datosproductos.ok) {
            setMostrarModal(!mostrarModal);
            mostrarPacientes();
        }
    }

    //Falta ver que sucede con el PUT si se queda o no
    //Metodo PUT
    /* const editarProductos = async (puesto) => {

        const datosproductos = await fetch("", { //Falta el link
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(puesto)
        })
        toast.success("Dato editado con exito")

        if (datosproductos.ok) {
            setMostrarModal(!mostrarModal);
            mostrarPacientes();
        }
    } */

    //Falta ver que sucede con el DELETE si se queda o no
    /* //Metodo DELETE
    const eliminarProductos = async (cedula) => {

        var respuesta = window.confirm("Esta seguro que quiere eliminar el dato?")

        if (!respuesta) {
            return;
        }

        const datosproductos = await fetch("", { //Falta el link
            method: 'DELETE',
        })
        toast.success("Dato borrado con exito")

        if (datosproductos.ok) {
            mostrarPacientes();
        }
    } */

    return (
        <>
            <NavbarNutri />
            <ToastContainer />
            <Container>
                <Row className="mt-5">
                    <Col sm="12">
                        <Card>
                            <Card.Header>
                                <h5>Búsqueda y Asociación de clientes como pacientes</h5>
                            </Card.Header>
                            <Card.Body>
                                {/* <Button size="sm" variant="primary"
                                    onClick={() => setMostrarModal(!mostrarModal)}>Asociar Paciente</Button>
                                <hr /> */}
                                <TablaAsociacion
                                    data={productos}
                                    setEditar={setEditar}
                                    mostrarModal={mostrarModal}
                                    setMostrarModal={setMostrarModal}
                                />
                                {/* 
                                eliminarProductos={eliminarProductos}
                                 */}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/* <ModalProductos
                    mostrarModal={mostrarModal}
                    setMostrarModal={setMostrarModal}
                    agregarListaPaciente={agregarListaPaciente}
                    editar={editar}
                    setEditar={setEditar}
                    editarProductos={editarProductos}
                /> */}
            </Container>
        </>
    )
}

export default AsociacionCliente;