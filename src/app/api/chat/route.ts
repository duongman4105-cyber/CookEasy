import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req: Request) {
  try {
    const { history, message } = await req.json();

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { error: "Biến môi trường GEMINI_API_KEY chưa được cấu hình." },
        { status: 500 }
      );
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    
    // Khởi tạo model với cấu hình System Instruction cho ngữ cảnh Chat AI
    const model = genAI.getGenerativeModel({ 
      model: "gemini-2.5-flash",
      systemInstruction: "Bạn là một Siêu đầu bếp AI của ứng dụng CookEasy. Nhiệm vụ của bạn là trò chuyện trực tiếp, tư vấn món ăn, hướng dẫn công thức, trả lời các thắc mắc về nấu ăn một cách thân thiện, hài hước và chuyên nghiệp. Nếu người dùng hỏi chuyện ngoài lề không liên quan đến ẩm thực, hãy khéo léo từ chối và quay lại chủ đề bếp núc. Luôn xưng hô là 'Đầu bếp AI' hoặc 'CookEasy AI' và gọi người dùng là 'bạn'. Bạn không được trả về JSON nữa, hãy trả lời bằng ngôn ngữ tự nhiên, ngắn gọn, dễ hiểu và dễ đọc."
    });

    const chat = model.startChat({
      history: history || [],
    });

    const result = await chat.sendMessage(message);
    const responseText = result.response.text();

    return NextResponse.json({ text: responseText });

  } catch (error: any) {
    console.error("AI Chat Route Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
