import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "CookEasy - Ẩm thực mọi nhà",
  description: "Web công thức nấu ăn đơn giản, dành cho tất cả mọi người.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="grow container mx-auto px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}

