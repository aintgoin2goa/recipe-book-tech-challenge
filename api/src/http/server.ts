import Koa from "koa";
import serve from "koa-static";
import recipes from "./endpoints/recipes";

const PORT = process.env.PORT;

export const start = () => {
  const app = new Koa();
  app.use(serve("./docs"));
  app.use(recipes());
  app.listen(PORT);
  console.log(`Listening on ${PORT}`);
};
