import mongoose, { Schema, model, models } from 'mongoose';

const InstructionSchema = new Schema({
  "@type": { type: String, required: true },
  name: { type: String, required: [true, 'Instruction name is required'] },
  text: { type: String, required: [true, 'Instruction text is required'] },
  image: { type: String, required: false }
}, { _id: false });

const RecipeSchema = new Schema({
  "@context": { type: String, required: true },
  "@type": { type: String, required: true },
  name: { type: String, required: [true, 'Recipe name is required'], index: true },
  image: { type: String, required: [true, 'Image URL is required'] },
  description: { type: String, required: [true, 'Description is required'] },
  recipeYield: { type: String, required: [true, 'Recipe yield is required'] },
  datePublished: { type: Date, required: [true, 'Publication date is required'] },
  prepTime: { type: String, required: [true, 'Preparation time is required'] },
  totalTime: { type: String, required: [true, 'Total time is required'] },
  recipeIngredient: [{ type: String, required: [true, 'Ingredients are required'] }],
  recipeInstructions: [InstructionSchema],
  category: { type: String, required: [true, 'Category is required'], index: true },
}, { timestamps: true });

const CoffeeRecipe = models.CoffeeRecipe || model('CoffeeRecipe', RecipeSchema);

export default CoffeeRecipe;
