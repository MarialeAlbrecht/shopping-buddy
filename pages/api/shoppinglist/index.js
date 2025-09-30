import dbConnect from "@/db/connect";
import shoppingItem from "@/db/models/shoppingItem";
import { mutate } from "swr";

export default async function handler(request, response) {
  await dbConnect();

  try {
    if (request.method === "GET") {
      const shoppingList = await shoppingItem.find().sort({ createdAt: -1 });
      response.status(200).json(shoppingList);
      return;
    }
    if (request.method === "POST") {
      const newProduct = request.body;
      await shoppingItem.create(newProduct);
      response.status(201).json({ status: "New product successfully created" });
      mutate("/api/shoppinglist");
    }
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: "Internal server error" });
    return;
  }

  response.status(405).json({ status: "Method not allowed" });
}
