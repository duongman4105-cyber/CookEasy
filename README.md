# 🍲 CookEasy - Ẩm Thực Mọi Nhà

CookEasy là một hệ thống website ẩm thực nấu ăn được thiết kế theo triết lý **Thiết Kế Phổ Quát (Universal Design)**. Dự án được xây dựng đặc biệt thân thiện, dễ sử dụng cho mọi lứa tuổi (đặc biệt là các bà, các mẹ nội trợ). 

Dự án cung cấp bộ dữ liệu gồm **50 món ăn Việt Nam**, tích hợp tính năng **Gợi Ý Menu Hằng Ngày** (nhớ Cache 24H) và thuật toán gợi ý thực đơn ngẫu nhiên khoa học.

---

## 🚀 Công Nghệ Sử Dụng

- **Frontend:** Next.js 15 (App Router), React 19, Tailwind CSS v4.
- **Backend/API:** Next.js Serverless API Route.
- **Cơ Sở Dữ Liệu:** MongoDB (kết nối qua Mongoose).
- **Ngôn ngữ:** TypeScript.

---

## 💻 Hướng Dẫn Cài Đặt & Chạy Dự Án

### Yêu Cầu Máy Chủ
- Đã cài đặt [Node.js](https://nodejs.org/en/) (phiên bản v18 trở lên).
- Đã cài đặt phần mềm [MongoDB Compass](https://www.mongodb.com/try/download/compass) và đang chạy MongoDB server trên máy (Port mặc định `27017`).

### Bước 1: Khởi Tạo Môi Trường Nền Tảng
1. Mở Terminal (VScode Terminal hoặc Command Prompt).
2. Trỏ vào thư mục chứa code (`C:\Users\Nhung-Duong\Desktop\CookEasy`).
3. Chạy lệnh cài đặt các gói phụ thuộc (thư viện):
   ```bash
   npm install
   ```

### Bước 2: Thiết Lập Kết Nối Database (MongoDB)
1. Đảm bảo bạn đã mở MongoDB Compass và bấm **Connect** vào địa chỉ: `mongodb://localhost:27017`
2. Nhìn vào thư mục gốc của code, ở đó đã có sẵn tệp `.env.local` chứa cấu hình kết nối như sau:
   ```env
   MONGODB_URI=mongodb://127.0.0.1:27017/cookeasy
   ```
*(Bạn không cần làm gì thêm).*

### Bước 3: Chạy Máy Chủ Lên (Khởi Động Web)
Tại Terminal đang mở, bạn nhập câu lệnh sau để chạy chế độ Phát Triển (Developer Mode):

```bash
npm run dev
```

Hệ thống sẽ chạy và báo: `ready started server on [::]:3000`. 
Lúc này, hãy **mở trình duyệt Chrome/Cốc Cốc** của bạn lên và gõ vào đường dẫn:
👉 **[http://localhost:3000](http://localhost:3000)**

### Bước 4: Khởi Tạo Tự Động 50 Món Ăn (Database Seeding)
Nếu đây là lần chạy web đầu tiên, màn hình của bạn sẽ thông báo *"Chưa có dữ liệu"*. 

Để nạp toàn bộ 50 món ăn vào DB một cách tự động, bạn chỉ cần gõ đúng cái link sau dán lên thanh tìm kiếm của Chrome rồi Enter:
👉 **[http://localhost:3000/api/seed](http://localhost:3000/api/seed)**

Web báo "*🎉 Đã làm mới lại Database với 50 món ăn Việt Nam chuẩn vị!*" là bạn đã thành công. 

Giờ thì, hãy quay lại `http://localhost:3000` và thưởng thức thôi!

---

### Mẹo: Hiển Thị Đường Dẫn Ảnh Đẹp
- Thay vì lấy ảnh từ mạng rất hay lỗi, CookEasy quản lý ảnh trực tiếp trong máy.
- Hãy lưu 50 tấm ảnh thức ăn bạn thích, đặt tên là `food1.jpg` đến `food50.jpg`.
- Bỏ tất cả ảnh đó vào trong thư mục con này của bộ code: `public/images/`. Hệ thống sẽ tự động ghép ảnh khớp với đồ ăn!

