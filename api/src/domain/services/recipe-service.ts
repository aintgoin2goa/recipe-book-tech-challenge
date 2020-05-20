import { Recipe } from "../entities/Recipe/entity";
import * as RecipeRepository from "../entities/Recipe/repository";

export const getAllRecipes = async (): Promise<Recipe[]> => {
  return RecipeRepository.all();
};

export const getOneRecipe = async (id: string): Promise<Recipe> => {
  return RecipeRepository.get(id);
};
