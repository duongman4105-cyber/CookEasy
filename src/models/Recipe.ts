import mongoose, { Schema, model, models } from "mongoose";

export interface IRecipe {
  // Bỏ _id vì MongoDB tự tạo
  title: string;
  image: string;
  prepTime: string;
  ingredients: string[];
  steps: string[];
  tags: string[];
}

const RecipeSchema = new Schema<IRecipe>(
  {
    title: { type: String, required: true },
    image: { type: String, required: true },
    prepTime: { type: String, required: true },
    ingredients: [{ type: String, required: true }],
    steps: [{ type: String, required: true }],
    tags: [{ type: String, required: true }],
  },
  {
    timestamps: true, // Tự động có createdAt, updatedAt
  }
);

// Tránh lỗi nạp đè Model trong môi trường dev Next.js
const Recipe = models.Recipe || model<IRecipe>("Recipe", RecipeSchema);

export default Recipe;
