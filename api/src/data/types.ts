export type IngredientData = {
  name: string;
  quantity: number;
  measurement?: string;
};

export type RecipeData = {
  id: string;
  name: string;
  imageUrl: string;
  cookingTime: string;
  ingredients: IngredientData[];
};
