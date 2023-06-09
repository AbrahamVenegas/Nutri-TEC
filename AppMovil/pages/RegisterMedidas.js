import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';
import axios from 'axios';

const BASE_URL = 'https://nutritec-api-postgres.azurewebsites.net/api';

const MeasurementsScreen = () => {
  const [waist, setWaist] = useState('');
  const [neck, setNeck] = useState('');
  const [hips, setHips] = useState('');
  const [musclePercentage, setMusclePercentage] = useState('');
  const [fatPercentage, setFatPercentage] = useState('');
  const [measurements, setMeasurements] = useState([]);

  useEffect(() => {
    fetchMeasurements();
  }, []);

  const fetchMeasurements = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/Medidas/Get_Id_Medidas?id_cliente=1`);
      setMeasurements(response.data);
    } catch (error) {
      console.log('Error fetching measurements:', error);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day < 10 ? '0' + day : day}/${month < 10 ? '0' + month : month}/${year}`;
  };

  const handleRegister = async () => {
    const newMeasurement = {
        idCliente:1,
        fecha: formatDate(new Date().toISOString()), // Formatear la fecha actual
      cintura: waist,
      cuello: neck,
      caderas: hips,
      porcentajeMusculo: musclePercentage,
      porcentajeGrasa: fatPercentage,
      
    };

    try {
      await axios.post(`${BASE_URL}/Medidas/Post`, newMeasurement);
      fetchMeasurements(); // Actualizar la lista después de registrar una medida
    } catch (error) {
      console.log('Error registering measurement:', error);
    }

    // Limpiar los campos del formulario
    setWaist('');
    setNeck('');
    setHips('');
    setMusclePercentage('');
    setFatPercentage('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro de Medidas</Text>

      <View style={styles.formContainer}>
        <Text style={styles.label}>Cintura</Text>
        <TextInput
          style={styles.input}
          placeholder="Cintura"
          value={waist}
          onChangeText={text => setWaist(text)}
          keyboardType="numeric"
        />

        <Text style={styles.label}>Cuello</Text>
        <TextInput
          style={styles.input}
          placeholder="Cuello"
          value={neck}
          onChangeText={text => setNeck(text)}
          keyboardType="numeric"
        />

        <Text style={styles.label}>Caderas</Text>
        <TextInput
          style={styles.input}
          placeholder="Caderas"
          value={hips}
          onChangeText={text => setHips(text)}
          keyboardType="numeric"
        />

        <Text style={styles.label}>% de Músculo</Text>
        <TextInput
          style={styles.input}
          placeholder="% de Músculo"
          value={musclePercentage}
          onChangeText={text => setMusclePercentage(text)}
          keyboardType="numeric"
        />

        <Text style={styles.label}>% de Grasa</Text>
        <TextInput
          style={styles.input}
          placeholder="% de Grasa"
          value={fatPercentage}
          onChangeText={text => setFatPercentage(text)}
          keyboardType="numeric"
        />

        <Button title="Registrar Medidas" onPress={handleRegister} />
      </View>

      <View style={styles.tableContainer}>
        <Text style={styles.tableTitle}>Medidas Registradas</Text>
        <FlatList
          data={measurements}
          keyExtractor={item => item.idMedida?.toString()} // Verificación de id
          renderItem={({ item }) => (
            <View style={styles.row}>
              <Text style={styles.date}>{item.fecha}</Text>
              <Text style={styles.measurement}>
                Cintura: {item.cintura}, Cuello: {item.cuello}, Caderas: {item.caderas}, % de Músculo: {item.porcentajeMusculo}, % de Grasa: {item.porcentajeGrasa}
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  formContainer: {
    marginBottom: 16,
  },
  label: {
    marginBottom: 4,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 12,
    paddingHorizontal: 10,
  },
  tableContainer: {
    flex: 1,
  },
  tableTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  row: {
    marginBottom: 4,
  },
  date: {
    fontWeight: 'bold',
  },
  measurement: {
    marginLeft: 16,
  },
});

export default MeasurementsScreen;