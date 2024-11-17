const mongoose = require('mongoose');

// Recipe schema definition
const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  ingredients: {
    type: [String],
    required: true,
  },
  instructions: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
  },
}, { timestamps: true });

module.exports = mongoose.model('Recipe', recipeSchema);
