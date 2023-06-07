import React, { useState } from 'react';
import { Table, Container, Form, Button, Row, Col } from 'react-bootstrap';

const initialRecipe = {
  id: '',
  name: '',
  ingredients: [''],
};

const GestionRecetas = () => {
  const [recipes, setRecipes] = useState([
    { id: 1, name: 'Receta 1', ingredients: ['Ingrediente 1', 'Ingrediente 2'] },
    { id: 2, name: 'Receta 2', ingredients: ['Ingrediente 3', 'Ingrediente 4'] },
  ]);

  const [currentRecipe, setCurrentRecipe] = useState(initialRecipe);

  const handleChangeRecipe = (e) => {
    setCurrentRecipe({ ...currentRecipe, [e.target.name]: e.target.value });
  };

  const handleChangeIngredient = (index, value) => {
    const ingredients = [...currentRecipe.ingredients];
    ingredients[index] = value;
    setCurrentRecipe({ ...currentRecipe, ingredients });
  };

  const handleAddIngredient = () => {
    const ingredients = [...currentRecipe.ingredients, ''];
    setCurrentRecipe({ ...currentRecipe, ingredients });
  };

  const handleRemoveIngredient = (index) => {
    const ingredients = [...currentRecipe.ingredients];
    ingredients.splice(index, 1);
    setCurrentRecipe({ ...currentRecipe, ingredients });
  };

  const handleAddRecipe = () => {
    const newRecipe = {
      id: recipes.length + 1,
      name: currentRecipe.name,
      ingredients: currentRecipe.ingredients,
    };

    setRecipes([...recipes, newRecipe]);
    setCurrentRecipe(initialRecipe);
  };

  const handleEditRecipe = (id) => {
    const recipeToEdit = recipes.find((recipe) => recipe.id === id);
    setCurrentRecipe({ ...recipeToEdit });
  };

  const handleUpdateRecipe = () => {
    const updatedRecipes = recipes.map((recipe) => {
      if (recipe.id === currentRecipe.id) {
        return { ...currentRecipe };
      }
      return recipe;
    });

    setRecipes(updatedRecipes);
    setCurrentRecipe(initialRecipe);
  };

  const handleDeleteRecipe = (id) => {
    const filteredRecipes = recipes.filter((recipe) => recipe.id !== id);
    setRecipes(filteredRecipes);
  };

  return (
    <Container>
      <h1>Recetas</h1>

      <Form>
        <Form.Group controlId="recipeName">
          <Form.Label>Nombre de la receta</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={currentRecipe.name}
            onChange={handleChangeRecipe}
          />
        </Form.Group>

        <h3>Ingredientes</h3>

        {currentRecipe.ingredients.map((ingredient, index) => (
          <Row key={index}>
            <Col xs={8}>
              <Form.Group>
                <Form.Control
                  as="select"
                  value={ingredient}
                  onChange={(e) => handleChangeIngredient(index, e.target.value)}
                >
                  <option value="">Seleccionar ingrediente</option>
                  <option value="Ingrediente 1">Ingrediente 1</option>
                  <option value="Ingrediente 2">Ingrediente 2</option>
                  <option value="Ingrediente 3">Ingrediente 3</option>
                  <option value="Ingrediente 4">Ingrediente 4</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col xs={4}>
              {index === currentRecipe.ingredients.length - 1 && (
                <Button variant="secondary" onClick={handleAddIngredient}>
                  +
                </Button>
              )}
              {currentRecipe.ingredients.length > 1 && (
                <Button variant="secondary" onClick={() => handleRemoveIngredient(index)}>
                  -
                </Button>
              )}
            </Col>
          </Row>
        ))}

        <Button
          variant="primary"
          onClick={currentRecipe.id ? handleUpdateRecipe : handleAddRecipe}
        >
          {currentRecipe.id ? 'Actualizar Receta' : 'Agregar Receta'}
        </Button>
      </Form>

      <h2>Lista de Recetas</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Ingredientes</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe) => (
            <tr key={recipe.id}>
              <td>{recipe.id}</td>
              <td>{recipe.name}</td>
              <td>{recipe.ingredients.join(', ')}</td>
              <td>
                <Button variant="info" onClick={() => handleEditRecipe(recipe.id)}>
                  Editar
                </Button>
                <Button variant="danger" onClick={() => handleDeleteRecipe(recipe.id)}>
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default GestionRecetas;
