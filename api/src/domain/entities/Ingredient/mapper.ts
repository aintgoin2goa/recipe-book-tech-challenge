import { Ingredient } from "./entity";
import { IngredientData } from "../../../data/types";

export const IngredientdataToEntity = (data: IngredientData): Ingredient => {
  return Object.assign({}, data);
};
