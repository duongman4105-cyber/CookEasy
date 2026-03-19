import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Recipe from "@/models/Recipe";
import DailyMenu from "@/models/DailyMenu";
import { mockRecipes } from "@/data/recipes";

export async function GET() {
  try {
    await connectToDatabase();

    // Làm sạch kho dữ liệu cũ
    await Recipe.deleteMany({});
    await DailyMenu.deleteMany({}); // Xoá cả lịch sử làm mới toàn bộ

    const mapRecipesToInsert = mockRecipes.map(({ id, ...rest }) => rest);
    await Recipe.insertMany(mapRecipesToInsert);

    return NextResponse.json({
      success: true,
      message: "🎉 Đã làm mới lại Database với 50 món ăn Việt Nam chuẩn vị!",
      total_inserted: mapRecipesToInsert.length,
    });
  } catch (error: any) {
    console.error("Lỗi khi seed data:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

