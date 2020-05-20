import { RecipeData } from "./types";
import AWS from "aws-sdk";

const dynamo = new AWS.DynamoDB({
  endpoint: process.env.DYNAMO_ENDPOINT,
  region: process.env.AWS_REGION,
});

const client = new AWS.DynamoDB.DocumentClient({
  service: dynamo,
});

const TABLE_NAME = "recipes";

type DataItem = {
  recipes: RecipeData[];
};

export const fetchAllRecipes = async () => {
  const response = await client.scan({ TableName: TABLE_NAME }).promise();
  return response.Items;
};

export const fetchRecipeById = async (id: string) => {
  const params = {
    TableName: TABLE_NAME,
    Key: {
      id,
    },
  };
  const response = await client.get(params).promise();
  return response.Item;
};
