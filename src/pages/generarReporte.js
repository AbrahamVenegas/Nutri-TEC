import React, { useState, useEffect } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Document, Page, Text, View, Image, PDFDownloadLink } from '@react-pdf/renderer';

import LogoImage from './Logo1.png'; // Ajusta la ruta de la imagen según corresponda

function GenerarReporte() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [data, setData] = useState([]);

  const prueba = localStorage.getItem('storagePrueba');


  /* const [id_cliente, setIDCliente] = useState('');
  const [cintura, setCintura] = useState('');
  const [cuello, setCuello] = useState('');
  const [caderas, setCaderas] = useState('');
  const [porcentaje_musculo, setPorcentajeMusculo] = useState('');
  const [porcentaje_grasa, setPorcentajeGrasa] = useState('');
  const [fecha, setFecha] = useState(''); */

  const filtrarDatos = () => {
    const filteredData = data.filter((item) => {
      const fecha = new Date(item.fecha);
      return fecha >= new Date(startDate) && fecha <= new Date(endDate);
    });
    return filteredData;
  };

  const GenerarDocumentoPDF = () => (
    <Document>
      <Page>
      <Image src={LogoImage} style={{marginTop: 20, marginBottom: 40 }} />
        <View>
          
          <Text style={{ fontSize: 14, marginBottom: 10 }}></Text>
          <Text style={{ fontSize: 14, marginBottom: 10 }}>Reporte de medidas</Text>
          {filtrarDatos().map((item) => {
            const fecha = new Date(item.fecha);
            const fechaTexto = `${fecha.getDate() + 1}/${fecha.getMonth() + 1}/${fecha.getFullYear()}`;
            return (
              <Text key={item.fecha} style={{ marginBottom: 10 }}>
                Fecha: {fechaTexto} - Medida: {item.medida}
              </Text>
            );
          })}
        </View>
        
      </Page>
    </Document>
  );

  const ejemploData = [
    { fecha: new Date('2023-01-01'), medida: 50 },
    { fecha: new Date('2023-02-02'), medida: 60 },
    { fecha: new Date('2023-03-03'), medida: 70 },
    { fecha: new Date('2023-04-04'), medida: 80 },
    { fecha: new Date('2023-06-05'), medida: 90 },
    { fecha: new Date('2023-06-07'), medida: 100 },
    { fecha: new Date('2023-06-07'), medida: 110 },
    { fecha: new Date('2023-06-08'), medida: 120 },
    { fecha: new Date('2023-01-09'), medida: 130 },
    { fecha: new Date('2023-01-10'), medida: 140 },
  ];

  useEffect(() => {
    setData(ejemploData);
  }, []);

  return (
    console.log(prueba),
    <Container>
      <h1>Generador de reportes</h1>
      <Form>
        <Form.Group controlId="startDate">
          <Form.Label>Fecha inicial:</Form.Label>
          <Form.Control type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="endDate">
          <Form.Label>Fecha final:</Form.Label>
          <Form.Control type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} style={{ marginBottom: '20px' }} />
        </Form.Group>
      </Form>
      <PDFDownloadLink document={<GenerarDocumentoPDF />} fileName="ReporteMedidas.pdf">
        {({ blob, url, loading, error }) =>
          <Button>Generar reporte en PDF</Button>
        }
      </PDFDownloadLink>
    </Container>
  );
}

export default GenerarReporte;
