import React, { useState, useEffect } from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavbarNutri from "../components/NavbarNutri";
import TablaAsignacion from "../components/AsignacionPlan/TablaAsignacion";
import ModalAsignacion from "../components/AsignacionPlan/ModalAsignacion";

const AsignacionPlan = () => {

    const [planes, setPlanes] = useState([]);
    //const [clientes, setCliente] = useState({});
    //const [nutricionista, setNutricionista] = useState({});

    const [mostrarModal, setMostrarModal] = useState(false);
    const [editar, setEditar] = useState(null);

    //Metodo GET
    const mostrarPlanes = async () => {
        async function fetchData() {
            try {
                const response = await fetch('https://gorest.co.in/public/v2/users'); //Falta el link
                const data = await response.json();
                setPlanes(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }

    useEffect(() => {
        mostrarPlanes()
    }, [])

    //Metodo POST
    const guardarPlanes = async (planes) => {

        const datosplanes = await fetch("", { //Falta el link
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(planes)
        })
        toast.success("Dato añadido con exito")

        if (datosplanes.ok) {
            setMostrarModal(!mostrarModal);
            mostrarPlanes();
        }
    }

    //Metodo PUT
    const editarPlanes = async (planes) => {

        const datosplanes = await fetch("", { //Falta el link
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(planes)
        })
        toast.success("Dato editado con exito")

        if (datosplanes.ok) {
            setMostrarModal(!mostrarModal);
            mostrarPlanes();
        }
    }

    //Metodo DELETE
    /* const eliminarPlanes = async (cedula) => {

        var respuesta = window.confirm("Esta seguro que quiere eliminar el dato?")

        if (!respuesta) {
            return;
        }

        const datosplanes = await fetch("", { //Falta el link
            method: 'DELETE',
        })
        toast.success("Dato borrado con exito")

        if (datosplanes.ok) {
            mostrarPlanes();
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
                                <h5>Asignación de un plan a un paciente</h5>
                            </Card.Header>
                            <Card.Body>
                                {/* <Button size="sm" variant="primary"
                                    onClick={() => setMostrarModal(!mostrarModal)}>Agregar Planes</Button>
                                <hr /> */}
                                <TablaAsignacion
                                    dataPlanes={planes}
                                    setEditar={setEditar}
                                    mostrarModal={mostrarModal}
                                    setMostrarModal={setMostrarModal}
                                />
                                {/*
                                 eliminarPlanes={eliminarPlanes} 
                                 */}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <ModalAsignacion
                    mostrarModal={mostrarModal}
                    setMostrarModal={setMostrarModal}
                    guardarPlanes={guardarPlanes}
                    editar={editar}
                    setEditar={setEditar}
                    editarPlanes={editarPlanes}
                />
            </Container>
        </>
    )
}

export default AsignacionPlan;