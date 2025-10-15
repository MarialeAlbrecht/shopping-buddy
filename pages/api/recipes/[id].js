import dbConnect from "@/db/connect";
import Recipes from "@/db/models/recipes";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const recipe = await Recipes.findById(id);
    if (!recipe) {
      response.status(404).json({ status: "Recipe not found" });
      return;
    }
    response.status(200).json(recipe);
    return;
  }
  if (request.method === "DELETE") {
    await Recipes.findByIdAndDelete(id);
    response.status(200).json({ message: "Recipe deleted" });
    return;
  }

  response.status(405).json({ status: "Method not allowed" });
}
