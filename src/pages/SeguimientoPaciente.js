import React, { useState, useEffect } from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavbarNutri from "../components/NavbarNutri";
import TablaSeguimiento from "../components/SeguimientoPaciente/TablaSeguimiento";
import ModalSeguimiento from "../components/SeguimientoPaciente/ModalSeguimiento";

const SeguimientoPaciente = () => {

    const [pacientes, setPaciente] = useState([]);

    const [mostrarModal, setMostrarModal] = useState(false);
    const [editar, setEditar] = useState(null);

    //Metodo GET
    const mostrarPacientes = async () => {
        async function fetchData() {
            try {
                const response = await fetch('https://gorest.co.in/public/v2/users'); //Falta el link
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

        const datospacientes = await fetch("", { //Falta el link
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(puesto)
        })
        toast.success("Dato añadido con exito")

        if (datospacientes.ok) {
            setMostrarModal(!mostrarModal);
            mostrarPacientes();
        }
    }

    //Falta ver que sucede con el PUT si se queda o no
    //Metodo PUT
    const editarPacientes = async (puesto) => {

        const datospacientes = await fetch("", { //Falta el link
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(puesto)
        })
        toast.success("Dato editado con exito")

        if (datospacientes.ok) {
            setMostrarModal(!mostrarModal);
            mostrarPacientes();
        }
    }

    return (
        <>
            <NavbarNutri />
            <ToastContainer />
            <Container>
                <Row className="mt-5">
                    <Col sm="12">
                        <Card>
                            <Card.Header>
                                <h5>Seguimiento Paciente</h5>
                            </Card.Header>
                            <Card.Body>
                                <TablaSeguimiento
                                    data={pacientes}
                                    setEditar={setEditar}
                                    mostrarModal={mostrarModal}
                                    setMostrarModal={setMostrarModal}
                                />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <ModalSeguimiento
                    mostrarModal={mostrarModal}
                    setMostrarModal={setMostrarModal}
                    agregarListaPaciente={agregarListaPaciente}
                    editar={editar}
                    setEditar={setEditar}
                    editarPacientes={editarPacientes}
                />
            </Container>
        </>
    )
}

export default SeguimientoPaciente;