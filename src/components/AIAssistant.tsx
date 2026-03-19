"use client";

import { useState, useRef, useEffect } from "react";

type Message = {
  role: "user" | "model";
  text: string;
};

export default function AIAssistant() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: "model", 
      text: "Xin chào! Mình là Đầu Bếp AI của nền tảng CookEasy đây. 🍳\nHôm nay bạn muốn nấu món gì? Hay trong tủ lạnh đang còn những nguyên liệu nào cần 'giải cứu', cứ gõ vào đây để mình tư vấn phương án ngon nhất cho bạn nhé!" 
    }
  ]);
  const [loading, setLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Tự động cuộn xuống tin nhắn mới nhất
  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: "smooth"
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input.trim();
    setInput("");
    
    // Thêm tin nhắn của người dùng vào giao diện ngay lập tức
    const newMessages = [...messages, { role: "user" as const, text: userMsg }];
    setMessages(newMessages);
    setLoading(true);

    try {
      // Lịch sử gửi cho Gemini bắt buộc phải bắt đầu bằng 'user'. 
      // Do đó chúng ta sẽ bỏ qua dòng chào mừng ban đầu (ở vị trí 0)
      const history = messages.slice(1).map(msg => ({
        role: msg.role,
        parts: [{ text: msg.text }]
      }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ history, message: userMsg }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Gặp lỗi kết nối đường truyền tới mây AI");
      }
      
      // Thêm câu trả lời của AI vào giao diện
      setMessages([...newMessages, { role: "model", text: data.text }]);
    } catch (err: any) {
      setMessages([...newMessages, { role: "model", text: "Xin lỗi bạn, hiện tại mình đang gặp chút sự cố kết nối. Bạn thử lại nha! (" + err.message + ")" }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative overflow-hidden bg-white rounded-4xl border border-orange-200 shadow-xl animate-fade-in-up mt-8 flex flex-col h-162.5">
      {/* Header Chat */}
      <div className="bg-linear-to-r from-orange-600 to-orange-500 p-5 md:p-6 flex justify-between items-center text-white shrink-0 shadow-md relative z-10">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 md:w-14 md:h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-3xl shrink-0 shadow-inner border border-white/20">
            👨‍🍳
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-black tracking-tight flex items-center gap-2">
              Trợ Lý Đầu Bếp AI
            </h2>
            <p className="text-orange-100 font-medium text-sm">Trực tuyến - Sẵn sàng giải đáp mọi công thức</p>
          </div>
        </div>
        <div className="flex gap-2">
          {/* Dấu chấm xanh online báo hiệu AI đang sống */}
          <span className="flex h-3 w-3 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400 border border-green-200 z-10"></span>
          </span>
        </div>
      </div>

      {/* Chat Messages Container */}
      <div 
        ref={chatContainerRef}
        className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6 bg-slate-50/50 relative"
      >
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-[85%] md:max-w-[75%] rounded-3xl p-4 md:p-5 shadow-sm text-[1.05rem] ${
              msg.role === "user" 
                ? "bg-orange-600 text-white rounded-tr-sm border border-orange-700/50"
                : "bg-white text-slate-700 border border-orange-100 rounded-tl-sm shadow-[0_4px_20px_rgb(0,0,0,0.03)]"
            }`}>
              {msg.role === "model" && (
                <div className="font-bold text-orange-600 mb-2 flex items-center gap-2 text-sm border-b border-orange-100 pb-2">
                  <span className="text-lg">✨</span> CookEasy AI
                </div>
              )}
              {/* Định dạng văn bản bảo tồn line-break. Render xóa nhẹ các dấu sao đánh dấu in đậm do AI xuất ra */}
              <div className="leading-relaxed whitespace-pre-wrap font-medium">
                {msg.text.replace(/\*\*(.*?)\*\*/g, "$1")}
              </div>
            </div>
          </div>
        ))}
        
        {/* Loading Indicator (Typing bubble) */}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-white border border-orange-100 rounded-3xl rounded-tl-sm p-5 shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex items-center gap-3">
              <div className="flex space-x-2">
                <div className="h-2.5 w-2.5 bg-orange-400 rounded-full animate-bounce"></div>
                <div className="h-2.5 w-2.5 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: "0.15s" }}></div>
                <div className="h-2.5 w-2.5 bg-orange-600 rounded-full animate-bounce" style={{ animationDelay: "0.3s" }}></div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input Form Area */}
      <div className="p-4 bg-white border-t border-slate-100 shrink-0">
        <div className="relative flex items-center max-w-4xl mx-auto shadow-sm rounded-full bg-slate-100 focus-within:ring-4 focus-within:ring-orange-500/20 focus-within:bg-orange-50 transition-all duration-300 border border-transparent focus-within:border-orange-300">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
            placeholder="Viết tin nhắn cho Đầu bếp AI..."
            className="w-full bg-transparent text-slate-800 focus:outline-none rounded-full py-4 md:py-5 pl-6 pr-16 text-lg font-medium"
            disabled={loading}
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || loading}
            className="absolute right-2 top-2 bottom-2 bg-orange-600 hover:bg-orange-500 text-white rounded-full aspect-square w-12 md:w-14 flex items-center justify-center transition-transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:hover:scale-100 shadow-md"
            aria-label="Gửi tin nhắn"
          >
            <svg className="w-6 h-6 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
