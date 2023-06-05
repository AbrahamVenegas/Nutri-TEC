import { useState } from "react";
import { Button, Table } from "react-bootstrap";

const TablaAsignacion = ({ dataPlanes, setEditar, mostrarModal, setMostrarModal }) => {

    const enviarDatos = (planes) => {
        setEditar(planes)
        setMostrarModal(!mostrarModal)
    }

    return (
        <>
            <Table striped bordered responsive >
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Primer Apellido</th>
                        <th>Segundo Apellido</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        (dataPlanes.length < 1) ? (
                            <tr>
                                <td colSpan="4">Sin registros</td>
                            </tr>
                        ) : (
                            dataPlanes.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.nombre}</td>
                                    <td>{item.apellido1}</td>
                                    <td>{item.apellido2}</td>
                                    {/*
                                    <td>{item.nombre}</td>
                                    <td>{item.apellido1}</td>
                                    <td>{item.apellido2}</td>
                                     */}
                                    <td>
                                        <Button
                                            variant="primary"
                                            size="sm"
                                            className="me-2"
                                            onClick={() => enviarDatos(item)}
                                        >Agregar Plan</Button>
                                    </td>
                                </tr>
                            ))
                        )
                    }
                </tbody>
            </Table>
        </>
    )
}

export default TablaAsignacion;