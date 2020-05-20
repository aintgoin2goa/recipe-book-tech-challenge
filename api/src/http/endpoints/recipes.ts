import Router from "koa-router";
import * as RecipeService from "../../domain/services/recipe-service";

export default () => {
  const router = new Router();

  router.get("/recipes", async (ctx) => {
    const recipes = await RecipeService.getAllRecipes();
    ctx.body = { recipes };
  });

  router.get("/recipes/:id", async (ctx) => {
    const id = ctx.params.id;
    const recipe = await RecipeService.getOneRecipe(id);
    ctx.body = { recipe };
  });

  return router.routes();
};
