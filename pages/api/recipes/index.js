import dbConnect from "@/db/connect";
import recipe from "@/db/models/recipes";
import { mutate } from "swr";

export default async function handler(request, response) {
  await dbConnect();

  try {
    if (request.method === "GET") {
      const newRecipe = await recipe.find().sort({ createdAt: -1 });
      response.status(200).json(newRecipe);
      return;
    }
    if (request.method === "POST") {
      const addRecipe = request.body;
      await recipe.create(addRecipe);
      response
        .status(201)
        .json({ status: "The recipe was successfully created" });
    }
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: "Internal server error" });
    return;
  }

  response.status(405).json({ status: "Method not allowed" });
}
