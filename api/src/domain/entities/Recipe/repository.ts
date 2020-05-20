import { Recipe } from "./entity";
import { fetchRecipeById, fetchAllRecipes } from "../../../data/fetch-data";
import RecipeNotFoundError from "../../errors/RecipeNotFound";
import { recipeDataToEntity } from "./mapper";

export const get = async (id: string): Promise<Recipe> => {
  const data = await fetchRecipeById(id);
  if (!data) {
    throw new RecipeNotFoundError(`Could not find recipe with id ${id}`, id);
  }

  return recipeDataToEntity(data);
};

export const all = async (): Promise<Recipe[]> => {
  const data = await fetchAllRecipes();
  return data.recipes.map(recipeDataToEntity);
};
