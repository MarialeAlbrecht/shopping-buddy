import dbConnect from "@/db/connect";
import shoppingItem from "@/db/models/shoppingitem";

export default async function handler(request, response) {
  await dbConnect();

  try {
    if (request.method === "GET") {
      const shoppingList = await shoppingItem.find();
      response.status(200).json(shoppingList);
      return;
    }
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: "Internal server error" });
    return;
  }

  response.status(405).json({ status: "Method not allowed" });
}
