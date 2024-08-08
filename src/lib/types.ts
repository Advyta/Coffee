export interface Pagination {
  totalItems: number;
  totalPages: number;
  currentPage: number;
  itemsPerPage: number;
}

export interface State {
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  recipes: Coffee[]; 
  pagination: Pagination;
  error: string | null;
}

export const initialState: State = {
  recipes: [],
  status: 'idle',
  pagination: { totalItems: 0, totalPages: 1, currentPage: 1, itemsPerPage: 10 },
  error: null
}

export interface Coffee  {
  _id: string;
  "@context": string;
  "@type": string;
  name: string;
  image: string;
  description: string;
  recipeYield: string;
  datePublished: string;
  prepTime: string;
  totalTime: string;
  recipeIngredient: string[];
  recipeInstructions: {
      "@type": string;
      name: string;
      text: string;
      image: string;
  }[];
  category: string;
}[]

