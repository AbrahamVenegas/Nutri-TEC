import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const RegistroMedidas = () => {
    const [medidas, setMedidas] = useState([]);
    const [id_cliente, setIDCliente] = useState('');
    const [cintura, setCintura] = useState('');
    const [cuello, setCuello] = useState('');
    const [caderas, setCaderas] = useState('');
    const [porcentaje_musculo, setPorcentajeMusculo] = useState('');
    const [porcentaje_grasa, setPorcentajeGrasa] = useState('');
    const [fecha, setFecha] = useState('');

    
    const [medidaId, setProductoId] = useState(null);
    const [showModal, setShowModal] = useState(false);

    localStorage.setItem('storagePrueba', "prueba");

    // Método GET
    const mostrarProductos = async () => {
        const response = await fetch("https://localhost:7165/medida");

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
        
        if (!cintura || !cuello || !caderas || !porcentaje_musculo || !porcentaje_grasa) {
            alert('Debes completar todos los campos');
            return;
        }

        fetch('https://localhost:7165/medida', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id_cliente:1,
                cintura:cintura,
                cuello:cuello,
                caderas:caderas,
                porcentaje_musculo:porcentaje_musculo,
                porcentaje_grasa:porcentaje_grasa,
                fecha:fecha
            })
        })
            .then(response => response.json())
            .then(data => {
                const nuevoProducto = {
                    id_cliente:data.id_cliente,
                    cintura:data.cintura,
                    cuello:data.cuello,
                    caderas:data.caderas,
                    porcentaje_musculo:data.porcentaje_musculo,
                    porcentaje_grasa:data.porcentaje_grasa,
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
            <h2 className="my-4">Gestión de Productos</h2>
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
                        <Form.Control type="number" /* maxLength={50} */ value={porcentaje_musculo} onChange={e => setPorcentajeMusculo(e.target.value)} />
                        {/* <small>{porcentaje_musculo.length}/50 caracteres</small> */}
                    </Form.Group>
                    <Form.Group controlId="porcentajeGrasa">
                        <Form.Label>Porcentaje de grasa:</Form.Label>
                        <Form.Control type="number" value={porcentaje_grasa} onChange={e => setPorcentajeGrasa(e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="fecha">
                        <Form.Label>Fecha:</Form.Label>
                        <Form.Control type="date" value={fecha} onChange={e => setFecha(e.target.value)} />
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
                            <td>{medida.id_cliente}</td>
                            <td>{medida.cintura}</td>
                            <td>{medida.cuello}</td>
                            <td>{medida.caderas}</td>
                            <td>{medida.porcentaje_musculo}</td>
                            <td>{medida.porcentaje_grasa}</td>
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