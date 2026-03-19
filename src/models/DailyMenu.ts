import mongoose, { Schema, model, models } from "mongoose";

export interface IDailyMenu {
  dateString: string;
  recipes: mongoose.Types.ObjectId[];
}

const DailyMenuSchema = new Schema<IDailyMenu>(
  {
    dateString: { type: String, required: true, unique: true }, // Format: YYYY-MM-DD
    recipes: [{ type: Schema.Types.ObjectId, ref: "Recipe" }],
  },
  {
    timestamps: true,
  }
);

const DailyMenu = models.DailyMenu || model<IDailyMenu>("DailyMenu", DailyMenuSchema);

export default DailyMenu;

