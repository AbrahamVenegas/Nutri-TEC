import { useState } from "react";
import { Button, Table } from "react-bootstrap";

const TablaPlanes = ({ dataPlanes, dataProducto, dataNutricionista,
    setEditar, mostrarModal, setMostrarModal, eliminarPlanes }) => {

    const enviarDatos = (planes) => {
        setEditar(planes)
        setMostrarModal(!mostrarModal)
    }

    return (
        <>
            <Table striped bordered responsive >
                <thead>
                    <tr>
                        <th>Desayuno</th>
                        <th>Merienda Mañana</th>
                        <th>Almuerzo</th>
                        <th>Merienda Tarde</th>
                        <th>Cena</th>
                        <th>Nombre Plan</th>
                        <th>Nutricionista</th>
                        <th>Total Calorias</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        (dataPlanes.length < 1) ? (
                            <tr>
                                <td colSpan="8">Sin registros</td>
                            </tr>
                        ) : (
                            dataPlanes.map((item) => (
                                <tr key={item.indice}>
                                    <td>{dataProducto[item.codigo_barras]}</td>
                                    <td>{dataProducto[item.codigo_barras]}</td>
                                    <td>{dataProducto[item.codigo_barras]}</td>
                                    <td>{dataProducto[item.codigo_barras]}</td>
                                    <td>{dataProducto[item.codigo_barras]}</td>
                                    <td>{item.nombre_plan}</td>
                                    <td>{dataNutricionista[item.nutricionista]}</td>
                                    <td>{item.total_calorias}</td>

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
                                            onClick={() => eliminarPlanes(item.indice)}
                                        >Eliminar</Button>
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

export default TablaPlanes;