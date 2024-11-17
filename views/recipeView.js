// recipeView.js - Responsible for formatting the response data
module.exports = {
    formatRecipe: (recipe) => ({
      id: recipe._id,
      name: recipe.name,
      ingredients: recipe.ingredients,
      instructions: recipe.instructions,
      imageUrl: recipe.imageUrl || null,
      createdAt: recipe.createdAt,
      updatedAt: recipe.updatedAt,
    }),
  
    formatRecipes: (recipes) => recipes.map((recipe) => ({
      id: recipe._id,
      name: recipe.name,
      ingredients: recipe.ingredients,
      instructions: recipe.instructions,
      imageUrl: recipe.imageUrl || null,
      createdAt: recipe.createdAt,
      updatedAt: recipe.updatedAt,
    }))
  };
  