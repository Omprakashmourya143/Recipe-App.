const Recipe = require('../models/recipeModel');
const RecipeView = require('../views/recipeView');

// Create a new recipe
exports.createRecipe = async (req, res) => {
  try {
    const { name, ingredients, instructions, imageUrl } = req.body;
    const newRecipe = new Recipe({ name, ingredients, instructions, imageUrl });
    await newRecipe.save();
    // View formatting before sending response
    res.status(201).json(RecipeView.formatRecipe(newRecipe));
  } catch (error) {
    res.status(500).json({ message: 'Error creating recipe', error });
  }
};

// Get all recipes
exports.getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.status(200).json(RecipeView.formatRecipes(recipes));
  } catch (error) {
    res.status(500).json({ message: 'Error fetching recipes', error });
  }
};

// Get a single recipe by ID
exports.getRecipeById = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }
    res.status(200).json(RecipeView.formatRecipe(recipe));
  } catch (error) {
    res.status(500).json({ message: 'Error fetching recipe', error });
  }
};

// Update a recipe by ID
exports.updateRecipe = async (req, res) => {
  try {
    const updatedRecipe = await Recipe.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedRecipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }
    res.status(200).json(RecipeView.formatRecipe(updatedRecipe));
  } catch (error) {
    res.status(500).json({ message: 'Error updating recipe', error });
  }
};

// Delete a recipe by ID
exports.deleteRecipe = async (req, res) => {
  try {
    const deletedRecipe = await Recipe.findByIdAndDelete(req.params.id);
    if (!deletedRecipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }
    res.status(200).json({ message: 'Recipe deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting recipe', error });
  }
};
