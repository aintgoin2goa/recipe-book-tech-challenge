import Koa from "koa";
import serve from "koa-static";

export const start = () => {
  const app = new Koa();
  app.use(serve("./docs"));
  app.listen(8080);
  console.log("Listening on 8080");
};
