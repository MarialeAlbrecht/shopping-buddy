import dbConnect from "@/db/connect";
import Item from "@/db/models/shoppingitems";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const items = await Item.find();
    response.status(200).json(items);
    return;
  }
  response.status(405).json({ status: "Method not allowed" });
}
