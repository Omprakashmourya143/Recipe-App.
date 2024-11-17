const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');

// Routes for recipe operations
router.post('/recipes', recipeController.createRecipe); // Create a recipe
router.get('/recipes', recipeController.getAllRecipes); // Get all recipes
router.get('/recipes/:id', recipeController.getRecipeById); // Get a recipe by ID
router.put('/recipes/:id', recipeController.updateRecipe); // Update a recipe by ID
router.delete('/recipes/:id', recipeController.deleteRecipe); // Delete a recipe by ID

module.exports = router;
