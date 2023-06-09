import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, ScrollView, Text } from 'react-native';
import axios from 'axios';
import md5 from 'md5';

const BASE_URL = 'https://nutritec-api-postgres.azurewebsites.net/api';

const RegisterScreen = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [weight, setWeight] = useState('');
  const [country, setCountry] = useState('');
  const [height, setHeight] = useState('');
  const [waistSize, setWaistSize] = useState('');
  const [neckSize, setNeckSize] = useState('');
  const [hipSize, setHipSize] = useState('');
  const [musclePercentage, setMusclePercentage] = useState('');
  const [fatPercentage, setFatPercentage] = useState('');
  const [calorieIntake, setCalorieIntake] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [bmi, setBmi] = useState('');

  const handleRegister = async () => {
    // Encriptar la contraseña usando MD5
    const encryptedPassword = md5(password);

    const newClient = {
      nombre: name,
      apellidos: lastName,
      edad: age,
      fechaNacimiento: dateOfBirth,
      peso: weight,
      pais: country,
      altura: height,
      medidaCintura: waistSize,
      medidaCuello: neckSize,
      medidaCaderas: hipSize,
      porcentajeMusculo: musclePercentage,
      porcentajeGrasa: fatPercentage,
      consumoCalorias: calorieIntake,
      email,
      contrasena: encryptedPassword,
    };

    try {
      await axios.post(`${BASE_URL}/Cliente/Post`, newClient);
      console.log('Cliente registrado exitosamente:', newClient);
    } catch (error) {
      console.log('Error al registrar el cliente:', error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Nombre</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={name}
        onChangeText={text => setName(text)}
      />

      <Text style={styles.label}>Apellidos</Text>
      <TextInput
        style={styles.input}
        placeholder="Apellidos"
        value={lastName}
        onChangeText={text => setLastName(text)}
      />

      <Text style={styles.label}>Edad</Text>
      <TextInput
        style={styles.input}
        placeholder="Edad"
        value={age}
        onChangeText={text => setAge(text)}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Fecha de Nacimiento (DD/MM/AAAA)</Text>
      <TextInput
        style={styles.input}
        placeholder="Fecha de Nacimiento (DD/MM/AAAA)"
        value={dateOfBirth}
        onChangeText={text => setDateOfBirth(text)}
      />

      <Text style={styles.label}>País de residencia</Text>
      <TextInput
        style={styles.input}
        placeholder="País de residencia"
        value={country}
        onChangeText={text => setCountry(text)}
      />

      <Text style={styles.label}>Peso (Kg)</Text>
      <TextInput
        style={styles.input}
        placeholder="Peso"
        value={weight}
        onChangeText={text => setWeight(text)}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Altura (cm)</Text>
      <TextInput
        style={styles.input}
        placeholder="Altura (cm)"
        value={height}
        onChangeText={text => setHeight(text)}
        keyboardType="numeric"
      />

      <Text style={styles.label}>IMC</Text>
      <TextInput
        style={styles.input}
        placeholder="IMC"
        value={bmi}
        editable={false}
      />

      <Text style={styles.label}>Medida de cintura</Text>
      <TextInput
        style={styles.input}
        placeholder="Medida de cintura"
        value={waistSize}
        onChangeText={text => setWaistSize(text)}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Medida de cuello</Text>
      <TextInput
        style={styles.input}
        placeholder="Medida de cuello"
        value={neckSize}
        onChangeText={text => setNeckSize(text)}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Medida de caderas</Text>
      <TextInput
        style={styles.input}
        placeholder="Medida de caderas"
        value={hipSize}
        onChangeText={text => setHipSize(text)}
        keyboardType="numeric"
      />

      <Text style={styles.label}>% de músculo</Text>
      <TextInput
        style={styles.input}
        placeholder="% de músculo"
        value={musclePercentage}
        onChangeText={text => setMusclePercentage(text)}
        keyboardType="numeric"
      />

      <Text style={styles.label}>% de grasa</Text>
      <TextInput
        style={styles.input}
        placeholder="% de grasa"
        value={fatPercentage}
        onChangeText={text => setFatPercentage(text)}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Consumo diario máximo de calorías</Text>
      <TextInput
        style={styles.input}
        placeholder="Consumo diario máximo de calorías"
        value={calorieIntake}
        onChangeText={text => setCalorieIntake(text)}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Correo electrónico</Text>
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        value={email}
        onChangeText={text => setEmail(text)}
        keyboardType="email-address"
      />

      <Text style={styles.label}>Contraseña</Text>
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
      />

      <Button title="Registrarse" onPress={handleRegister} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  label: {
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginBottom: 4,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 12,
    paddingHorizontal: 10,
  },
});

export default RegisterScreen;
