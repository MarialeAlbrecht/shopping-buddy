import dbConnect from "@/db/connect";
import category from "@/db/models/category";

export default async function handler(request, response) {
  await dbConnect();

  try {
    if (request.method === "GET") {
      const Categories = await category.find();
      response.status(200).json(Categories);
      return;
    }
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: "Internal server error" });
    return;
  }

  response.status(405).json({ status: "Method not allowed" });
}
