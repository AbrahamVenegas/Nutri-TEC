import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import AboutPage from './pages/RegistroCliente';
import ContactPage from './pages/ContactPage';
import LoginScreen from './pages/LoginCliente';
import MeasurementsScreen from './pages/RegisterMedidas';
import MealRegistrationScreen from './pages/RegistroDiario';
import RecipeScreen from './pages/GrestionRecetas';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Registro" component={AboutPage} />
        <Stack.Screen name="Contact" component={ContactPage} />
        <Stack.Screen name="Medidas" component={MeasurementsScreen} />
        <Stack.Screen name="ConsumoDiario" component={MealRegistrationScreen} />
        <Stack.Screen name="Recetas" component={RecipeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

