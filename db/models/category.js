import mongoose from "mongoose";
const { Schema } = mongoose;

const categoriesSchema = new Schema(
  {
    category: { type: String, required: true },
  },
  { collection: "Category" }
);

const Category =
  mongoose.models.Category || mongoose.model("Category", categoriesSchema);

export default Category;
