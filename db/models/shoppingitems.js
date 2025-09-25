import mongoose from "mongoose";
const { Schema } = mongoose;

const shoppingItemSchema = new Schema({
  name: { type: String, require: true },
  imageUrl: { type: String, require: true },
  quantity: { type: Number, require: true },
  category: { type: String, require: true },
  comment: { type: String, require: true },
});

const Item = mongoose.models.Item || mongoose.model("Item", shoppingItemSchema);

export default Item;
