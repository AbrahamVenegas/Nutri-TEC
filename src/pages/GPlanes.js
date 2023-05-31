import React, { useState, useEffect } from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavbarNutri from "../components/NavbarNutri";
import ModalPlanes from "../components/GPlanes/ModalPlanes";
import TablaPlanes from "../components/GPlanes/TablaPlanes";

const GPlanes = () => {

    const [planes, setPlanes] = useState([]);
    const [productos, setProductos] = useState({});
    const [nutricionista, setNutricionista] = useState({});

    const [mostrarModal, setMostrarModal] = useState(false);
    const [editar, setEditar] = useState(null);

    //Metodo GET
    const mostrarPlanes = async () => {
        async function fetchData() {
            try {
                const response = await fetch(''); //Falta el link
                const data = await response.json();
                setPlanes(data);
                
                //Obtener descripciones de productos
                const productoResponse = await fetch(''); //Falta el link
                const productosData = await productoResponse.json();
                const productosMap = {};
                productosData.forEach((productos) => {
                    productosMap[productos.id] = productos.descripcion;
                });
                setProductos(productosMap);

                //Obtener descripciones de nutricionista
                const nutricionistaRespone = await fetch(''); //Falta el link
                const nutricionistaData = await nutricionistaRespone.json();
                const nutricionistaMap = {};
                nutricionistaData.forEach((nutricionista) => {
                    nutricionistaMap[nutricionista.id] = nutricionista.descripcion;
                });
                setNutricionista(nutricionistaMap);

                
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
    const guardarPlanes = async (producto) => {

        const datosplanes = await fetch("", { //Falta el link
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(producto)
        })
        toast.success("Dato añadido con exito")

        if (datosplanes.ok) {
            setMostrarModal(!mostrarModal);
            mostrarPlanes();
        }
    }

    //Metodo PUT
    const editarPlanes = async (producto) => {

        const datosplanes = await fetch("", { //Falta el link
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(producto)
        })
        toast.success("Dato editado con exito")

        if (datosplanes.ok) {
            setMostrarModal(!mostrarModal);
            mostrarPlanes();
        }
    }

    //Metodo DELETE
    const eliminarPlanes = async (cedula) => {

        var respuesta = window.confirm("Esta seguro que quiere eliminar el dato?")

        if (!respuesta) {
            return;
        }

        const datosplanes = await fetch("" , { //Falta el link
            method: 'DELETE',
        })
        toast.success("Dato borrado con exito")

        if (datosplanes.ok) {
            mostrarPlanes();
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
                                <h5>Gestión de Planes</h5>
                            </Card.Header>
                            <Card.Body>
                                <Button size="sm" variant="primary"
                                    onClick={() => setMostrarModal(!mostrarModal)}>Agregar Planes</Button>
                                <hr />
                                <TablaPlanes
                                    dataPlanes={planes}
                                    dataProducto={productos}
                                    dataNutricionista={nutricionista}
                                    setEditar={setEditar}
                                    mostrarModal={mostrarModal}
                                    setMostrarModal={setMostrarModal}
                                    eliminarPlanes={eliminarPlanes}
                                />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <ModalPlanes
                    mostrarModal={mostrarModal}
                    setMostrarModal={setMostrarModal}
                    guardarPlanes={guardarPlanes}
                    editar={editar}
                    setEditar={setEditar}
                    editarPlanes={editarPlanes}
                    dataProductos={productos}
                    dataNutricionista={nutricionista}
                />
            </Container>
        </>
    )
}

export default GPlanes;