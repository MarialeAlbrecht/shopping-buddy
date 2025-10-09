import mongoose from "mongoose";
const { Schema } = mongoose;

const recipesSchema = new Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    instructions: { type: String, required: true },
    ingredients: [
      {
        ingredient: { type: String, required: true },
        measure: { type: String, required: true },
      },
    ],
  },
  { timestamps: true }
);

const Recipes =
  mongoose.models.Recipes || mongoose.model("Recipes", recipesSchema);

export default Recipes;
