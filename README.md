#  CookEasy - Nền Tảng Ẩm Thực Thông Minh

> **Một website nấu ăn hiện đại, dễ dùng, được thiết kế dành cho tất cả mọi người**

CookEasy là một hệ thống website ẩm thực thông minh, được thiết kế theo **nguyên lý Thiết Kế Phổ Quát (Universal Design)** nhằm đem lại trải nghiệm tuyệt vời cho mọi lứa tuổi - đặc biệt là các bà, các mẹ nội trợ. 

###  Mục Tiêu Dự Án
-  Cung cấp **50 món ăn Việt Nam** chính gốc, đa dạng
-  Gợi ý thực đơn hằng ngày thông minh với cơ chế **cache 24H**
- Giao diện thân thiện, dễ dàng sử dụng cho người không hiểu công nghệ
- Tích hợp tìm kiếm nhanh chóng và thông minh
- Ứng dụng Web Responsive, hoạt động tốt trên mọi thiết bị

###  Tính Năng Nổi Bật
| Tính Năng | Mô Tả |
|-----------|-------|
|  **Tìm Kiếm Nâng Cao** | Tìm nhanh chóng các công thức nấu ăn |
|  **Gợi Ý Menu Thông Minh** | AI gợi ý thực đơn dựa trên thuật toán tiên tiến |
|  **Cache 24H** | Cải thiện hiệu suất, giảm tải cho máy chủ |
|  **Responsive Design** | Hoạt động trên Desktop, Tablet, và Mobile |
|  **Giao Diện Hiện Đại** | Sử dụng Tailwind CSS v4  |
|  **Database MongoDB** | Lưu trữ dữ liệu an toàn, mở rộng dễ dàng |

---

##  Kiến Trúc & Công Nghệ Sử Dụng

### Stack Công Nghệ
```
┌─────────────────────────────────────────┐
│        Frontend Layer (Client)           │
├─────────────────────────────────────────┤
│   Next.js 15 (App Router)               │
│   React 19                              │
│   Tailwind CSS v4 (Styling)             │
│   TypeScript (Type Safety)              │
└─────────────────────────────────────────┘
           ↓ API Communication ↓
┌─────────────────────────────────────────┐
│        Backend Layer (Server)            │
├─────────────────────────────────────────┤
│   Next.js Serverless API Routes         │
│   Node.js Runtime                       │
│   TypeScript                            │
└─────────────────────────────────────────┘
           ↓ Database Query ↓
┌─────────────────────────────────────────┐
│        Data Layer (Database)             │
├─────────────────────────────────────────┤
│   MongoDB (NoSQL)                       │
│   Mongoose (ODM)                        │
│   Cloud/Local Instance                  │
└─────────────────────────────────────────┘
```

### Công Nghệ Chi Tiết
- **Frontend:** Next.js 15 (App Router), React 19, Tailwind CSS v4
- **Backend/API:** Next.js Serverless API Routes
- **Database:** MongoDB + Mongoose ORM
- **Language:** TypeScript
- **Caching:** Client-side caching (24H cache strategy)
- **Styling:** Tailwind CSS v4 (utility-first)

---

## Cấu Trúc Dự Án

```
CookEasy/
│
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── page.tsx                  # Trang chủ
│   │   ├── layout.tsx                # Layout chứa chung
│   │   ├── globals.css               # CSS toàn cục
│   │   ├── recipe/[id]/page.tsx      # Chi tiết công thức nấu
│   │   └── api/
│   │       ├── chat/route.ts         # API 1: Trao đổi AI assistant
│   │       ├── search/route.ts       # API 2: Tìm kiếm công thức 
│   │       ├── seed/route.ts         # API 3: Khởi tạo dữ liệu
│   │       └── suggest/route.ts      # API 4: Gợi ý thực đơn 
│   │
│   ├── components/                   # React Components
│   │   ├── Header.tsx                # Header component
│   │   ├── SearchBar.tsx             # Thanh tìm kiếm
│   │   ├── RecipeCard.tsx            # Thẻ công thức
│   │   ├── AllRecipes.tsx            # Danh sách công thức
│   │   └── AIAssistant.tsx           # Chat AI component
│   │
│   ├── lib/
│   │   └── mongodb.ts                # Database connection utility
│   │
│   ├── models/                       # MongoDB Schemas
│   │   ├── Recipe.ts                 # Schema cho công thức
│   │   └── DailyMenu.ts              # Schema cho menu hàng ngày
│   │
│   └── data/
│       └── recipes.ts                # Bộ dữ liệu 50 công thức
│
├── public/
│   └── images/                       # Thư mục lưu ảnh công thức
│
├── package.json                      # Dependencies
├── tsconfig.json                     # TypeScript config
├── next.config.ts                    # Next.js config
├── tailwind.config.ts                # Tailwind config
├── postcss.config.mjs                # PostCSS config
│
└── .env.local                        # Biến môi trường (MongoDB URI)
```

###  Chứng Năng Của Các Thư Mục
- **`src/app/`** - Routing và API endpoints (Next.js 13+ App Router)
- **`src/components/`** - Các component React tái sử dụng được
- **`src/lib/`** - Các hàm utility và kết nối database
- **`src/models/`** - Định nghĩa schema MongoDB (Mongoose)
- **`src/data/`** - Dữ liệu gốc (seed data)

---

##  Hướng Dẫn Cài Đặt & Chạy Dự Án

###  Yêu Cầu Hệ Thống
| Requirement | Phiên Bản | Ghi Chú |
|------------|---------|--------|
| Node.js | v18+ |  Bắt buộc |
| npm | 9+ | Có kèm Node.js |
| MongoDB | Mới nhất |  Bắt buộc |
| MongoDB Compass | - |  Optional (UI quản lý DB) |

### 📋 Bước-Bước Cài Đặt

#### **Bước 1: Chuẩn Bị Môi Trường**
```bash
# 1. Mở Terminal/CMD
# 2. Điều hướng vào thư mục dự án
cd C:\Users\Nhung-Duong\Desktop\CookEasy

# 3. Cài đặt tất cả dependencies
npm install
```
**Kết quả:** Thư mục `node_modules/` được tạo với ~300+ packages

#### **Bước 2: Thiết Lập MongoDB**
1. Đảm bảo **MongoDB Server** đã khởi động *(Port: 27017)*
2. Xác nhận tệp `.env.local` tồn tại với nội dung:
   ```env
   MONGODB_URI=mongodb://127.0.0.1:27017/cookeasy
   ```
3. *Optional:* Mở **MongoDB Compass** để kiểm tra kết nối

#### **Bước 3: Chạy Development Server**
```bash
npm run dev
```

**Output mong đợi:**
```
▲ Next.js 15.1.3
- Local:        http://localhost:3000/
✓ Ready in 1.23s
```

 **Mở trình duyệt** và truy cập: **[http://localhost:3000](http://localhost:3000)**

#### **Bước 4: Khởi Tạo Dữ Liệu (Database Seeding)**
Khi chạy lần đầu, database sẽ trống. Để nạp 50 công thức mẫu:

1. Mở link này trong trình duyệt:
   ```
   http://localhost:3000/api/seed
   ```

2. Chờ phản hồi: 
   ```json
   {
     "message": "🎉 Đã làm mới lại Database với 50 món ăn Việt Nam chuẩn vị!",
     "count": 50,
     "status": "success"
   }
   ```

3.  Quay lại `http://localhost:3000` để xem dữ liệu!

---

##  API Documentation

### Overview
CookEasy cung cấp 4 API endpoints chính cho client-side consume:

| Endpoint | Method | Mục Đích | Response |
|----------|--------|---------|----------|
| `/api/seed` | GET | Nạp 50 công thức mẫu vào MongoDB | `{ message, count, status }` |
| `/api/search` | POST | Tìm kiếm công thức theo từ khóa | `{ recipes: Recipe[] }` |
| `/api/suggest` | GET | Gợi ý 3 công thức ngẫu nhiên (Cache 24H) | `{ recipes: Recipe[], timestamp }` |
| `/api/chat` | POST | Chat với AI Assistant | `{ response: string }` |

###  Ví Dụ Sử Dụng

#### 1. Tìm Kiếm Công Thức
```javascript
// Request
POST /api/search
{
  "query": "cơm tấm"
}

// Response
{
  "recipes": [
    {
      "_id": "123abc",
      "name": "Cơm Tấm Sài Gòn",
      "ingredients": ["nước mắm", "tỏi", "hành"],
      "instructions": "...",
      "cookTime": 20,
      "servings": 2,
      "imageUrl": "/images/food1.jpg"
    }
  ]
}
```

#### 2. Gợi Ý Menu Hàng Ngày
```javascript
// Request
GET /api/suggest

// Response (Cache 24H)
{
  "recipes": [
    { id: 1, name: "Phở Bò Hanoi" },
    { id: 5, name: "Bánh Mì Thịt Nạc" },
    { id: 12, name: "Chè Ba Màu" }
  ],
  "timestamp": "2024-03-20T10:30:00Z"
}
```

---

##  Đặc Trưng Nổi Bật

### 1 **Thiết Kế Universal Design**
- Font size lớn, dễ đọc
- Contrast cao giữa text và background
- Navigation đơn giản, trực quan
- Support keyboard navigation

### 2 **Responsive Design**
-  Mobile (320px - 480px)
-  Tablet (481px - 768px)  
-  Desktop (769px+)
-  Performance: LCP < 2.5s

### 3 **Caching Strategy (24H Cache)**
```
┌─────────────────────┐
│ Request untuk /api/suggest
└───────────┬─────────┘
            │
    ┌─────────────────────┐
    │ Cache hit? (< 24H)  │
    └──┬─────────────────┬┘
       │                 │
     YES               NO
       │                 │
    Return         ├─ Query MongoDB
    cached data    ├─ Generate recommendations
                   ├─ Store in sessionStorage
                   └─ Return with timestamp
```

### 4 **TypeScript Type Safety**
```typescript
interface Recipe {
  _id: string;
  name: string;
  ingredients: string[];
  instructions: string;
  cookTime: number;
  servings: number;
  imageUrl: string;
  createdAt: Date;
}

interface DailyMenu {
  recipes: Recipe[];
  timestamp: Date;
}
```

### 5 **Database Optimization**
- Indexed fields: `name`, `ingredients`
- Connection pooling (Mongoose)
- Query optimization

---

##  Học Tập Từ Dự Án Này

### Kiến Thức Áp Dụng
-  **Full-Stack Development:** Frontend + Backend + Database
-  **Modern Framework:** Next.js 15 App Router pattern
-  **TypeScript:** Type-safe JavaScript development
-  **Database Design:** MongoDB schema & Mongoose ODM
-  **API Design:** RESTful API principles
-  **Caching:** Client-side cache strategy
-  **Performance:** Optimization techniques
-  **UX Design:** Universal Design principles

### Best Practices Được Áp Dụng
1. **Separation of Concerns** - Models, API, Components tách biệt
2. **Type Safety** - TypeScript strict mode
3. **Error Handling** - Try-catch trong API routes
4. **Environment Configuration** - `.env.local` cho sensitive data
5. **Responsive Design** - Mobile-first approach

---

##  Quản Lý Ảnh Công Thức

### Hướng Dẫn Thêm Ảnh
CookEasy quản lý ảnh trực tiếp trong thư mục dự án (không lấy từ mạng ngoài)

```
public/images/
├── food1.jpg      → Phở Bò
├── food2.jpg      → Bún Chả
├── food3.jpg      → Bánh Mì
└── ... (food50.jpg)
```

###  Các Bước
1. Chuẩn bị 50 tấm ảnh công thức
2. Đặt tên: `food1.jpg`, `food2.jpg`, ..., `food50.jpg`
3. Lưu vào thư mục: `public/images/`
4. Hệ thống tự động ghép ảnh!

---

##  Troubleshooting

| Vấn Đề | Nguyên Nhân | Giải Pháp |
|--------|-----------|----------|
| `MongoDB connection failed` | MongoDB server chưa chạy |  Khởi động MongoDB (Port 27017) |
| `Module not found: 'mongoose'` | Dependencies chưa cài |  Chạy `npm install` |
| `EADDRINUSE :::3000` | Port 3000 đang bị chiếm |  Tắt process khác hoặc `npm run dev -- -p 3001` |
| `No recipes found` | Database chưa có seed data |  Truy cập `http://localhost:3000/api/seed` |
| `Image not displaying` | Ảnh không trong `public/images/` |  Kiểm tra tên file từ `food1.jpg`-`food50.jpg` |

---

##  Hướng Phát Triển Tiếp Theo

### Tính Năng Có Thể Mở Rộng
-  User Authentication (đăng nhập/đăng ký)
-  Yêu thích công thức (Save recipes)
-  Rating & Review công thức
-  Chia sẻ công thức với bạn bè
-  Tạo danh sách mua sắm từ công thức
-  Gửi thực đơn hàng ngày qua email
-  AI recommendation engine (ML model)
-  Analytics dashboard

### Cải Thiện Kỹ Thuật
-  Implement Caching layer (Redis)
-  Database indexing optimization
-  Internationalization (i18n)
-  Unit & Integration tests
-  SEO optimization
-  Lighthouse performance optimization

---

##  Tham Khảo & Resources

### Official Documentation
- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [MongoDB Mongoose](https://mongoosejs.com)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

### Useful Tools
-  [MongoDB Compass](https://www.mongodb.com/products/compass)
-  [VS Code](https://code.visualstudio.com)
-  [DevTools Chrome](https://developer.chrome.com/docs/devtools)
-  [Postman](https://www.postman.com) (Test APIs)

---

## 👨‍💼 Thông Tin Dự Án

### Project Stats
-  **Thời gian phát triển:** 2024-2025
-  **Cơ sở dữ liệu:** 50 công thức Việt Nam
-  **Support devices:** Desktop, Tablet, Mobile
-  **Target audience:** Mọi lứa tuổi, đặc biệt nội trợ
-  **Version:** 1.0.0
-  **License:** MIT

###  Mục Đích Giáo Dục
Dự án được xây dựng nhằm:
-  Ứng dụng kiến thức Full-Stack Development
-  Thực hành TypeScript & Modern JavaScript
-  Hiểu rõ về Database Design & Optimization
-  Áp dụng UX/Design principles
-  Giải quyết real-world problems

---

##  Kết Luận

**CookEasy** không chỉ là một website nấu ăn, mà còn là:
-  **Một dự án Full-Stack hoàn chỉnh** từ Frontend đến Backend
-  **Áp dụng Type Safety** với TypeScript
-  **Tối ưu hiệu suất** với caching strategy
-  **Thiết kế Universal** cho mọi người dùng
-  **Học tập thực tiễn** các công nghệ hiện đại

Hy vọng dự án này sẽ là nguồn cảm hứng cho các bạn trong việc học tập và phát triển ứng dụng web tiếp theo! 

---

**Bất kỳ thắc mắc nào, vui lòng tham khảo tài liệu hoặc liên hệ với tác giả!** 
