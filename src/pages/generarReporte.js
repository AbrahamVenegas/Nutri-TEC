import React, { useState, useEffect } from 'react';
import { Container, Table, Form, Button } from 'react-bootstrap';
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const GenerarReporte = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const fetchData = async () => {
    try {
      const response = await fetch('https://nutritec-api-postgres.azurewebsites.net/api/Medidas/Get');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDateRangeSubmit = (e) => {
    e.preventDefault();

    const filteredData = data.filter((item) => {
      const itemDateParts = item.fecha.split('/');
      const itemDate = new Date(
        itemDateParts[2],
        itemDateParts[1] - 1,
        itemDateParts[0]
      );

      const startDateParts = startDate.split('-');
      const startDateObj = new Date(
        startDateParts[0],
        startDateParts[1] - 1,
        startDateParts[2]
      );

      const endDateParts = endDate.split('-');
      const endDateObj = new Date(
        endDateParts[0],
        endDateParts[1] - 1,
        endDateParts[2]
      );

      return itemDate >= startDateObj && itemDate <= endDateObj;
    });

    setFilteredData(filteredData);
  };

  const renderPDFLink = () => {
    if (filteredData.length === 0) {
      return null;
    }

    return (
      <PDFDownloadLink
        document={<PDFDocument data={filteredData} />}
        fileName="datos_filtrados.pdf"
      >
        {({ blob, url, loading, error }) =>
          loading ? 'Generando PDF...' : 'Descargar PDF'
        }
      </PDFDownloadLink>
    );
  };


  const PDFDocument = ({ data }) => (
    <Document>
      <Page>
        <View style={styles.container}>
          <Text style={styles.header}>Datos Filtrados</Text>
          {data.map((item, index) => (
            <View key={index} style={styles.dataContainer}>
              <Text style={styles.idLabel}>ID medida: {item.idMedida}</Text>
              <View style={styles.divider}></View>
              <Text style={styles.label}>Cintura: {item.cintura}</Text>
              <Text style={styles.label}>Cuello: {item.cuello}</Text>
              <Text style={styles.label}>Caderas: {item.caderas}</Text>
              <Text style={styles.label}>Porcentaje Musculo: {item.porcentajeMusculo}</Text>
              <Text style={styles.label}>Porcentaje Grasa: {item.porcentajeGrasa}</Text>
              <Text style={styles.label}>Fecha: {item.fecha}</Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );




  const styles = StyleSheet.create({
    container: {
      padding: 20,
    },
    header: {
      fontSize: 24,
      marginBottom: 20,
    },
    dataContainer: {
      marginBottom: 10,
    },
    idLabel: {
      marginBottom: 5,
      fontWeight: 'bold',
    },
    divider: {
      borderBottomWidth: 1,
      borderBottomColor: 'gray',
      marginBottom: 5,
    },
    label: {
      marginBottom: 5,
    },
  });



  return (
    <Container>
      <h1>Tabla de Datos</h1>

      <Form onSubmit={handleDateRangeSubmit}>
        <Form.Group controlId="startDate">
          <Form.Label>Fecha inicial</Form.Label>
          <Form.Control
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="endDate">
          <Form.Label>Fecha final</Form.Label>
          <Form.Control
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Filtrar
        </Button>
      </Form>

      <Table>
        <thead>
          <tr>
            <th>Id Medida</th>
            <th>Cintura</th>
            <th>Cuello</th>
            <th>Caderas</th>
            <th>Porcentaje musculo</th>
            <th>Porcentaje grasa</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
              <td>{item.idMedida}</td>
              <td>{item.cintura}</td>
              <td>{item.cuello}</td>
              <td>{item.caderas}</td>
              <td>{item.porcentajeMusculo}</td>
              <td>{item.porcentajeGrasa}</td>
              <td>{item.fecha}</td>

            </tr>
          ))}
        </tbody>
      </Table>


      {renderPDFLink()}

    </Container>
  );
};

export default GenerarReporte;
