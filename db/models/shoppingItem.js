import mongoose from "mongoose";
const { Schema } = mongoose;

const shoppingItemSchema = new Schema(
  {
    name: { type: String, required: true },
    imageUrl: { type: String },
    quantity: { type: Number, required: true },
    category: { type: String, required: true },
    comment: { type: String },
  },
  { collection: "shoppingItem" }
);

const shoppingItem =
  mongoose.models.shoppingItem ||
  mongoose.model("shoppingItem", shoppingItemSchema);

export default shoppingItem;
