import { RecipeData } from "./types";

type DataItem = {
  recipes: RecipeData[];
};

type Data = {
  [key: string]: DataItem;
};

const data: Data = {
  recipes: { recipes: [] },
  oneRecipe: { recipes: [] },
  noRecipes: { recipes: [] },
};

/**
 * A cheating way of enabling different sorts of data to test the UI responds appropiately
 */
const fetchData = () => {
  const name = process.env.DATASOURCE || "recipes";
  return data[name];
};

export const fetchAllRecipes = async () => {
  return fetchData();
};

export const fetchRecipeById = async (id: string) => {
  const recipes = await fetchAllRecipes();
  return recipes.recipes.find((r) => r.id === id);
};
