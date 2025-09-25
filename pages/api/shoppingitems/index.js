import dbConnect from "@/db/connect";
import Item from "@/db/models/shoppingitems";

export default async function handler(request, response) {
  await dbConnect();

  try {
    if (request.method === "GET") {
      const items = await Item.find();
      response.status(200).json(items);
      return;
    }
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: "Internal server error" });
    return;
  }

  response.status(405).json({ status: "Method not allowed" });
}
