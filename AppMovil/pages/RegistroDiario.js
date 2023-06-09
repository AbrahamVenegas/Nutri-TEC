import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';
import axios from 'axios';
import { Picker } from '@react-native-picker/picker';

const BASE_URL = 'https://nutritec-api-postgres.azurewebsites.net/api';

const MealRegistrationScreen = () => {
    const [mealTime, setMealTime] = useState('');
    const [searchOption, setSearchOption] = useState('');
    const [searchInput, setSearchInput] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [mealDiary, setMealDiary] = useState({
        desayuno: [],
        meriendaManana: [],
        almuerzo: [],
        meriendaTarde: [],
        cena: [],
    });

    const handleSearch = async () => {
        try {
            let endpoint = '';
            if (searchOption === 'codigo_barras') {
                endpoint = `${BASE_URL}/Producto/Get_CodigoBarras?codigo=${searchInput}`;
            } else {
                endpoint = `${BASE_URL}/Producto/Get_Descripcion?descripcion=${searchInput}`;
            }

            const response = await axios.get(endpoint);
            setSearchResults(response.data);
        } catch (error) {
            console.log('Error searching foods:', error);
        }
    };

    const handleAddToDiary = (food) => {
        if (mealTime === 'Desayuno') {
            setMealDiary((prevState) => ({
                ...prevState,
                desayuno: [...prevState.desayuno, food.codigoBarras],
            }));
        } else if (mealTime === 'Merienda Mañana') {
            setMealDiary((prevState) => ({
                ...prevState,
                meriendaManana: [...prevState.meriendaManana, food.codigoBarras],
            }));
        } else if (mealTime === 'Almuerzo') {
            setMealDiary((prevState) => ({
                ...prevState,
                almuerzo: [...prevState.almuerzo, food.codigoBarras],
            }));
        } else if (mealTime === 'Merienda Tarde') {
            setMealDiary((prevState) => ({
                ...prevState,
                meriendaTarde: [...prevState.meriendaTarde, food.codigoBarras],
            }));
        } else if (mealTime === 'Cena') {
            setMealDiary((prevState) => ({
                ...prevState,
                cena: [...prevState.cena, food.codigoBarras],
            }));
        }
    };

    const handleFinishDiary = async () => {
        const currentDate = new Date();
        const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;

        const requestBody = {
            idCliente: 1, // Reemplazar con el ID del cliente correspondiente
            fecha: formattedDate,
            desayuno: mealDiary.desayuno[0],
            meriendaMañana: mealDiary.meriendaManana[0],
            almuerzo: mealDiary.almuerzo[0],
            meriendaTarde: mealDiary.meriendaTarde[0],
            cena: mealDiary.cena[0],
        };

        try {
            console.log(requestBody);
            await axios.post(`${BASE_URL}/Consumo/Post`, requestBody);
            console.log('Registro diario enviado');
        } catch (error) {
            console.log('Error al enviar el registro diario:', error);
        }
    };

    // Renderiza la tabla de tiempos
    const renderMealTable = () => {
        return (
            <View style={styles.tableContainer}>
                <Text style={styles.tableTitle}>Registro Diario</Text>
                <View style={styles.row}>
                    <Text style={styles.mealTime}>Desayuno</Text>
                    <Text style={styles.mealValue}>{mealDiary.desayuno.length > 0 ? 'Lleno' : 'Vacío'}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.mealTime}>Merienda Mañana</Text>
                    <Text style={styles.mealValue}>{mealDiary.meriendaManana.length > 0 ? 'Lleno' : 'Vacío'}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.mealTime}>Almuerzo</Text>
                    <Text style={styles.mealValue}>{mealDiary.almuerzo.length > 0 ? 'Lleno' : 'Vacío'}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.mealTime}>Merienda Tarde</Text>
                    <Text style={styles.mealValue}>{mealDiary.meriendaTarde.length > 0 ? 'Lleno' : 'Vacío'}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.mealTime}>Cena</Text>
                    <Text style={styles.mealValue}>{mealDiary.cena.length > 0 ? 'Lleno' : 'Vacío'}</Text>
                </View>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Registro de Consumo</Text>

            <View style={styles.formContainer}>
                <Text style={styles.label}>Tiempo de Comida</Text>
                <Picker style={styles.picker} selectedValue={mealTime} onValueChange={(value) => setMealTime(value)}>
                    <Picker.Item label="Desayuno" value="Desayuno" />
                    <Picker.Item label="Merienda Mañana" value="Merienda Mañana" />
                    <Picker.Item label="Almuerzo" value="Almuerzo" />
                    <Picker.Item label="Merienda Tarde" value="Merienda Tarde" />
                    <Picker.Item label="Cena" value="Cena" />
                </Picker>

                <Text style={styles.label}>Buscar por</Text>
                <Picker style={styles.picker} selectedValue={searchOption} onValueChange={(value) => setSearchOption(value)}>
                    <Picker.Item label="Nombre" value="nombre" />
                    <Picker.Item label="Código de Barras" value="codigo_barras" />
                </Picker>

                <Text style={styles.label}>Ingrediente</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ingrediente"
                    value={searchInput}
                    onChangeText={(text) => setSearchInput(text)}
                />

                <Button title="Buscar" onPress={handleSearch} />
            </View>

            {renderMealTable()}

            <Text style={styles.tableTitle}>Resultados de búsqueda</Text>
            <FlatList
                data={searchResults}
                keyExtractor={(item) => item.codigoBarras.toString()}
                renderItem={({ item }) => (
                    <View style={styles.row}>
                        <Text style={styles.foodName}>{item.descripcion}</Text>
                        <Text style={styles.foodDetails}>
                            Código de Barras: {item.codigoBarras}, Calorías: {item.energia}
                        </Text>
                        <Button title="Agregar al Diario" onPress={() => handleAddToDiary(item)} />
                    </View>
                )}
            />

            <Button title="Finalizar Registro Diario" onPress={handleFinishDiary} />
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
    picker: {
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 12,
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 12,
        paddingHorizontal: 10,
    },
    tableContainer: {
        marginBottom: 16,
    },
    tableTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
        marginTop: 20,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 4,
    },
    mealTime: {
        fontWeight: 'bold',
    },
    mealValue: {
        marginLeft: 16,
    },
    foodName: {
        fontWeight: 'bold',
    },
    foodDetails: {
        marginLeft: 16,
    },
});

export default MealRegistrationScreen;
