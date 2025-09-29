import dbConnect from "@/db/connect";
import shoppingItem from "@/db/models/shoppingItem";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const product = await shoppingItem.findById(id);
    if (!product) {
      response.status(404).json({ status: "Product not found" });
      return;
    }
    response.status(200).json(product);
    return;
  }
  if (request.method === "DELETE") {
    const result = await shoppingItem.findByIdAndDelete(id);
    response.status(200).json({ message: "Product deleted" });
    return;
  }

  response.status(405).json({ status: "Method not allowed" });
}
