import { RecipeData } from "../../../data/types";
import { Recipe } from "./entity";
import { IngredientdataToEntity } from "../Ingredient/mapper";

export const recipeDataToEntity = (data: RecipeData): Recipe => {
  return {
    id: data.id,
    name: data.name,
    image: data.imageUrl,
    ingredients: data.ingredients.map(IngredientdataToEntity),
    cookingTime: data.cookingTime,
  };
};
