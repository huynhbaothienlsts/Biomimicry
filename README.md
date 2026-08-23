# Biomimicry Lab — Học thiết kế từ tự nhiên

Website tự học tiếng Việt dành cho học sinh THPT, giới thiệu 10 nguyên lý Biomimicry, ví dụ sinh học, câu hỏi thiết kế và quy trình chuyển chiến lược tự nhiên thành giải pháp.

## Chức năng

- Tra cứu và lọc 10 nguyên lý theo chủ đề.
- Mở rộng từng nguyên lý để xem ví dụ tự nhiên, gợi ý áp dụng và câu hỏi thiết kế.
- Đánh dấu tiến độ học; dữ liệu được lưu trên trình duyệt của học sinh.
- Hướng dẫn quy trình Biomimicry 5 bước và cách tìm kiếm trên AskNature.
- Phiếu thử thách thiết kế có thể in.
- Giao diện responsive cho máy tính, máy tính bảng và điện thoại.

## Chạy trên máy

Yêu cầu Node.js 22.13 trở lên.

```bash
pnpm install
pnpm dev
```

Kiểm tra bản triển khai:

```bash
pnpm build
```

## Đưa mã nguồn lên GitHub

```bash
git add .
git commit -m "Create Vietnamese Biomimicry learning site"
git remote add origin https://github.com/TEN-CUA-BAN/biomimicry-lab.git
git push -u origin main
```

## Xuất bản từ GitHub

Dự án sử dụng vinext và tạo ứng dụng Cloudflare Worker. Cách phù hợp nhất là kết nối repository GitHub với Cloudflare Workers/Pages:

1. Trên Cloudflare, chọn **Workers & Pages → Create → Import a repository**.
2. Chọn repository GitHub vừa tạo.
3. Build command: `pnpm build`.
4. Triển khai theo cấu hình Worker do vinext tạo ra.

Nếu chỉ cần lưu trữ mã nguồn, đẩy repository lên GitHub là đủ; website không cần cơ sở dữ liệu hay khóa bí mật.

## Nguồn nội dung

- [Nature's Unifying Patterns — Biomimicry Toolbox](https://toolbox.biomimicry.org/core-concepts/natures-unifying-patterns/)
- [AskNature](https://asknature.org/)
- [The Biomimicry Institute](https://biomimicry.org/)

Nội dung tiếng Việt được biên soạn phục vụ giáo dục. Các nguồn gốc và bản quyền thuộc những tổ chức được dẫn liên kết.
