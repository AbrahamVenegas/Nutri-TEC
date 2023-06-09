import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";

const TablaProductos = ({ data, setEditar, mostrarModal, setMostrarModal, eliminarProductos }) => {

    const [show, setShow] = useState(''); //La info no se puede mostrar hasta que el admin lo permita

    const enviarDatos = (productos) => {
        setEditar(productos)
        setMostrarModal(!mostrarModal)
    }

    return (
        <Table striped responsive>
            <thead>
                <tr>
                    <th>Código de Barras</th>
                    <th>Descripcion</th>
                    <th>Porción</th>
                    <th>Energía</th>
                    <th>Grasa</th>
                    <th>Sodio</th>
                    <th>Carbohidratos</th>
                    <th>Proteína</th>
                    <th>Vitaminas</th>
                    <th>Calcio</th>
                    <th>Hierro</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    (data.length < 1) ? (
                        <tr>
                            <td colSpan="12">Sin registros</td>
                        </tr>
                    ) : (
                        data.map((item) => (
                            <tr key={item.codigoBarras}>
                                <td>{item.codigoBarras}</td>
                                <td>{item.descripcion}</td>
                                <td>{item.tamanoPorciones}</td>
                                <td>{item.energia}</td>
                                <td>{item.grasa}</td>
                                <td>{item.sodio}</td>
                                <td>{item.carbohidratos}</td>
                                <td>{item.proteina}</td>
                                <td>{item.vitaminas}</td>
                                <td>{item.calcio}</td>
                                <td>{item.hierro}</td>
                                <td>
                                    <Button
                                        variant="primary"
                                        size="sm"
                                        className="me-2"
                                        onClick={() => enviarDatos(item)}
                                    >Editar</Button>
                                    <Button
                                        variant="danger"
                                        size="sm"
                                        onClick={() => eliminarProductos(item.codigoBarras)}
                                    >Eliminar</Button>
                                </td>
                            </tr>
                        ))
                    )
                }
            </tbody>
        </Table>
    )
}

export default TablaProductos;