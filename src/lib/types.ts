
interface State {
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  recipes: []; 
  error: string | null;
}

export const initialState: State = {
  recipes: [],
  status: 'idle',
  error: null
}


interface RecipeIngredient {
  quantity: string;
  ingredient: string;
}

interface RecipeInstruction {
  type: string;
  name: string;
  text: string;
  image: string;
}

export interface Recipe {
  _id: string;
  context: string;
  type: string;
  name: string;
  image: string;
  description: string;
  recipeYield: string;
  datePublished: string;
  prepTime: string;
  totalTime: string;
  recipeIngredient: RecipeIngredient[];
  recipeInstructions: RecipeInstruction[];
  category: string;
}
