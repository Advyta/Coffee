
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


export interface HowToStep {
  type: string;
  name: string;
  text: string;
  image: string;
}

export interface Coffee {
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
  recipeIngredient: string[];
  recipeInstructions: HowToStep[];
  category: string;
}

