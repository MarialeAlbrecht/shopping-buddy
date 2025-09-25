import mongoose from "mongoose";
const { Schema } = mongoose;

const shoppingItemSchema = new Schema(
  {
    name: { type: String, required: true },
    imageUrl: { type: String, required: true },
    quantity: { type: Number, required: true },
    category: { type: String, required: true },
    comment: { type: String, required: true },
  },
  { collection: "shoppingItem" }
);

const shoppingItem =
  mongoose.models.shoppingItem ||
  mongoose.model("shoppingItem", shoppingItemSchema);

export default shoppingItem;
