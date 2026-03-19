import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req: Request) {
  try {
    const { ingredients } = await req.json();

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { error: "Biến môi trường GEMINI_API_KEY chưa được cấu hình ở Backend." },
        { status: 500 }
      );
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    // Sử dụng model 'gemini-2.5-flash' để cho tốc độ phản hồi cực nhanh, hoặc 'gemini-pro'
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    // Dặn AI trả về cấu trúc chuẩn JSON
    const prompt = `Bạn là một siêu đầu bếp chuyên nghiệp 5 sao. Người dùng đang có các nguyên liệu sau trong tủ lạnh: "${ingredients}". 
Hãy sáng tạo ra MỘT món ăn duy nhất ngon nhất, thực tế và dễ làm từ các nguyên liệu này (có thể giả định người dùng có sẵn dầu, mắm, muối, hành tỏi các gia vị cơ bản).
QUAN TRỌNG: Bạn chỉ được phép trả về kết quả dưới dạng ĐÚNG MỘT ĐỐI TƯỢNG JSON thuần túy (không bọc trong \`\`\`json hay bất kỳ thẻ markdown nào khác), theo cấu trúc chính xác sau:
{
  "title": "Tên món ăn sáng tạo",
  "prepTime": "Thời gian (VD: 25 phút)",
  "ingredients": ["Nguyên liệu 1", "Nguyên liệu 2"],
  "steps": ["Bước nấu 1...", "Bước nấu 2..."]
}
Không thêm văn bản nào khác ngoài JSON này.`;

    const result = await model.generateContent(prompt);
    const responseText = result.response.text();

    console.log("Raw AI Response:", responseText);

    // Xử lý dọn dẹp chuỗi JSON phòng trường hợp AI thêm markdown bằng cách loại bỏ các ký tự không cần thiết
    const jsonString = responseText.replace(/```json/gi, "").replace(/```/gi, "").trim();

    try {
      const recipeData = JSON.parse(jsonString);
      return NextResponse.json(recipeData);
    } catch (parseError) {
      console.error("Lỗi Parse JSON từ AI:", parseError, "Chuỗi AI trả về:", responseText);
      return NextResponse.json({ error: "Lỗi định dạng dữ liệu từ AI. Hãy thử lại." }, { status: 500 });
    }

  } catch (error: any) {
    console.error("AI Route Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
