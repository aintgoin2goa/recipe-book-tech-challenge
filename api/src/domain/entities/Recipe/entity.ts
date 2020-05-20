import { Ingredient } from "../Ingredient/entity";

export type Recipe = {
  id: string;
  name: string;
  image: string;
  ingredients: Ingredient[];
  cookingTime: string;
};
