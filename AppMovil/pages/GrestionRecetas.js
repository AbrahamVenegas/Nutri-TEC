import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';
import axios from 'axios';

const BASE_URL = 'https://nutritec-api-postgres.azurewebsites.net/api';

const RecipeScreen = () => {
  const [recipeName, setRecipeName] = useState('');
  const [ingredient1, setIngredient1] = useState('');
  const [ingredient2, setIngredient2] = useState('');
  const [ingredient3, setIngredient3] = useState('');
  const [portion, setPortion] = useState('');
  const [barcode, setBarcode] = useState('');
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/Receta/Get`);
      setRecipes(response.data);
    } catch (error) {
      console.log('Error fetching recipes:', error);
    }
  };

  const handleCreateRecipe = async () => {
    const requestBody = {
      nombreReceta: recipeName,
      ingredientes: [ingredient1, ingredient2, ingredient3],
      porcion: portion,
      codigoBarras: barcode,
    };

    try {
      await axios.post(`${BASE_URL}/Receta/Post`, requestBody);
      console.log('Receta creada exitosamente');
      // Actualizar la lista de recetas después de crear una nueva
      fetchRecipes();
    } catch (error) {
      console.log('Error al crear la receta:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Creación de Receta</Text>

      <View style={styles.formContainer}>
        <Text style={styles.label}>Nombre de la Receta</Text>
        <TextInput
          style={styles.input}
          placeholder="Nombre de la Receta"
          value={recipeName}
          onChangeText={(text) => setRecipeName(text)}
        />

        <Text style={styles.label}>Ingrediente 1</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrediente 1"
          value={ingredient1}
          onChangeText={(text) => setIngredient1(text)}
        />

        <Text style={styles.label}>Ingrediente 2</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrediente 2"
          value={ingredient2}
          onChangeText={(text) => setIngredient2(text)}
        />

        <Text style={styles.label}>Ingrediente 3</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrediente 3"
          value={ingredient3}
          onChangeText={(text) => setIngredient3(text)}
        />

        <Text style={styles.label}>Porción</Text>
        <TextInput
          style={styles.input}
          placeholder="Porción"
          value={portion}
          onChangeText={(text) => setPortion(text)}
        />

        <Text style={styles.label}>Código de Barras</Text>
        <TextInput
          style={styles.input}
          placeholder="Código de Barras"
          value={barcode}
          onChangeText={(text) => setBarcode(text)}
        />

        <Button title="Crear Receta" onPress={handleCreateRecipe} />
      </View>

      <View style={styles.tableContainer}>
        <Text style={styles.tableTitle}>Recetas</Text>
        <FlatList
          data={recipes}
          keyExtractor={(item) => item.codigoBarras.toString()}
          renderItem={({ item }) => (
            <View style={styles.row}>
              <Text style={styles.recipeName}>{item.descripcion}</Text>
              <Text style={styles.barcode}>{item.codigoBarras}</Text>
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
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  recipeName: {
    fontWeight: 'bold',
  },
  barcode: {
    marginLeft: 16,
  },
});

export default RecipeScreen;
