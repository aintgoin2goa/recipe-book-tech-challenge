export default class RecipeNotFoundError extends Error {
  public id: string;

  constructor(message: string, id: string) {
    super(message);
    Error.captureStackTrace(this, RecipeNotFoundError);
    this.id = id;
  }
}
