import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";

/* eliminarclientes */
const TablaSeguimiento = ({ data, setEditar, mostrarModal, setMostrarModal }) => {

    const agregarCliente = (clientes) => {
        setEditar(clientes)
        setMostrarModal(!mostrarModal)
    }

    return (
        <Table striped responsive>
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
                    (data.length < 1) ? (
                        <tr>
                            <td colSpan="3">Sin registros</td>
                        </tr>
                    ) : (
                        data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.gender}</td>
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
                                        onClick={() => agregarCliente(item)}
                                    >Retroalimentación</Button>
                                </td>
                            </tr>
                        ))
                    )
                }
            </tbody>
        </Table>
    )
}

export default TablaSeguimiento;