import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const BASE_URL = 'https://nutritec-api-postgres.azurewebsites.net/api';

const RegistroMedidas = () => {
    const [medidas, setMedidas] = useState([]);
    const [id_cliente, setIDCliente] = useState('');
    const [cintura, setCintura] = useState('');
    const [cuello, setCuello] = useState('');
    const [caderas, setCaderas] = useState('');
    const [porcentajeMusculo, setPorcentajeMusculo] = useState('');
    const [porcentajeGrasa, setPorcentajeGrasa] = useState('');
    const [fecha, setFecha] = useState('');

    
    const [medidaId, setProductoId] = useState(null);
    const [showModal, setShowModal] = useState(false);

    localStorage.setItem('storagePrueba', "prueba");

    // Método  
    const mostrarProductos = async () => {
        const response = await fetch(`${BASE_URL}/Medidas/Get_Id_Medidas?id_cliente=1`);

        if (response.ok) {
            const medidas = await response.json();
            console.log(medidas);
            setMedidas(medidas);
        } else {
            console.log("Hubo un error");
        }
    };

    useEffect(() => {
        mostrarProductos();
    }, []);

    // Método POST
    const agregarProducto = () => {
        
        if (!cintura || !cuello || !caderas || !porcentajeMusculo || !porcentajeGrasa) {
            alert('Debes completar todos los campos');
            return;
        }

        fetch(`${BASE_URL}/Medidas/Post`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                idCliente:1,
                cintura:cintura,
                cuello:cuello,
                caderas:caderas,
                porcentajeMusculo:porcentajeMusculo,
                porcentajeGrasa:porcentajeGrasa,
                fecha:fecha
            })
        })
            .then(response => response.json())
            .then(data => {
                const nuevoProducto = {
                    idCliente:data.id_cliente,
                    cintura:data.cintura,
                    cuello:data.cuello,
                    caderas:data.caderas,
                    porcentajeMusculo:data.porcentajeMusculo,
                    porcentajeGrasa:data.porcentajeGrasa,
                    fecha:data.fecha
                };
                setMedidas([...medidas, nuevoProducto]);
                mostrarProductos();
                setIDCliente('');
                setCintura('');
                setCuello('');
                setCaderas('');
                setPorcentajeGrasa('');
                setPorcentajeMusculo('');
                setFecha('');
            })
            .catch(error => console.error(error));
    };



    const handleModalClose = () => {
        setShowModal(false);
        setIDCliente('');
        setCintura('');
        setCuello('');
        setCaderas('');
        setPorcentajeGrasa('');
        setPorcentajeMusculo('');
        setFecha('');
        setProductoId(null);
    };

    return (
        <>
        <div className="container">
            <h2 className="my-4">Registro de medidas</h2>
            <div className="row mb-3">
                <div className="col-md-6">
                    <Form.Group controlId="cintura">
                        <Form.Label>Cintura:</Form.Label>
                        <Form.Control type="number" value={cintura} onChange={e => setCintura(e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="cuello">
                        <Form.Label>Cuello:</Form.Label>
                        <Form.Control type="number" value={cuello} onChange={e => setCuello(e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="caderas">
                        <Form.Label>Caderas:</Form.Label>
                        <Form.Control type="number" value={caderas} onChange={e => setCaderas(e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="porcentajeMusculo">
                        <Form.Label>Porcentaje de musculo:</Form.Label>
                        <Form.Control type="number" /* maxLength={50} */ value={porcentajeMusculo} onChange={e => setPorcentajeMusculo(e.target.value)} />
                        {/* <small>{porcentajeMusculo.length}/50 caracteres</small> */}
                    </Form.Group>
                    <Form.Group controlId="porcentajeGrasa">
                        <Form.Label>Porcentaje de grasa:</Form.Label>
                        <Form.Control type="number" value={porcentajeGrasa} onChange={e => setPorcentajeGrasa(e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="fecha">
                        <Form.Label>Fecha (DD/MM/AAAA):</Form.Label>
                        <Form.Control type="text" value={fecha} onChange={e => setFecha(e.target.value)} />
                    </Form.Group>
                </div>
                <div className="col-md-3 d-flex align-items-end">
                    {medidaId === null ? (
                        <Button variant="primary" onClick={agregarProducto}>Agregar medida</Button>
                    ) : (
                        <Button variant="primary" onClick={() => setShowModal(true)}>Editar Producto</Button>
                    )}
                </div>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Cintura</th>
                        <th>Cuello</th>
                        <th>Caderas</th>
                        <th>Porcentaje de músculo</th>
                        <th>Porcentaje de grasa</th>
                        <th>Fecha</th>
                    </tr>
                </thead>
                <tbody>
                    {medidas.map((medida, index) => (
                        <tr key={index}>
                            <td>{medida.idMedida}</td>
                            <td>{medida.cintura}</td>
                            <td>{medida.cuello}</td>
                            <td>{medida.caderas}</td>
                            <td>{medida.porcentajeMusculo}</td>
                            <td>{medida.porcentajeGrasa}</td>
                            <td>{medida.fecha}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>

           
        </div>
        </>
    );
};

export default RegistroMedidas;  