# Biomimicry Learning Lab

Website học tập tương tác bằng tiếng Việt dành cho học sinh Công nghệ 12. Trải nghiệm trung tâm là **Biomimicry Mission**:

**Observe → Function → AskNature → Biological Strategy → Abstract → Design**

Học sinh điền Họ và tên, Lớp, Nhóm trước khi bắt đầu. Mỗi chặng chỉ mở khi học sinh hoàn thành chặng trước. Câu trả lời và Concept Sketch được tự động lưu trên thiết bị; chỉ sau khi hoàn thành đủ 6 Mission, học sinh mới có thể xuất toàn bộ hành trình thành phiếu PDF để nộp lên Canvas.

Khi hoàn thành bài trắc nghiệm với kết quả từ **80% trở lên**, học sinh được mở khóa Giấy chứng nhận. Website tự điền họ tên, lớp, ngày hoàn thành và giáo viên hướng dẫn vào mẫu Certificate trước khi xuất PDF.

## Cấu trúc

```text
biomimicry-self-study/
├── index.html
├── about.html
├── materials.html
├── style.css
├── script.js
├── about.js
├── materials.js
├── README.md
└── assets/
    └── images/
        ├── huynh-bao-thien.jpg
        ├── tu-song-ngan.png
        ├── duong-le-hong-tham.jpg
        └── certificate.png
```

Website là bản tĩnh, không cần Node.js, backend, database hoặc bước build.

Trang `materials.html` là phòng thí nghiệm học tập Tuần 6 về Vật liệu và Thiết kế. Học sinh hoàn thành Material Card, bản đồ vòng đời, Sustainability Score, Material Translation Canvas, Rapid Sketch, Material Pitch và xuất phiếu PDF.

## Preview locally

Mở trực tiếp `index.html` bằng Chrome hoặc Edge. Có thể dùng Live Server trong Visual Studio Code để trang tự tải lại khi chỉnh sửa.

## Xuất phiếu học tập PDF

1. Hoàn thành tuần tự đủ 6 chặng của **Biomimicry Mission**.
2. Chọn **Xuất phiếu PDF**.
3. Trong hộp thoại in của trình duyệt, chọn **Save as PDF / Lưu dưới dạng PDF**.
4. Đặt tên file và tải file lên Canvas.

## Xuất Giấy chứng nhận

1. Hoàn thành bài trắc nghiệm và đạt ít nhất 80%.
2. Kiểm tra họ tên, lớp và chọn một giáo viên hướng dẫn.
3. Chọn **Tạo và xuất chứng nhận PDF**.
4. Trong hộp thoại in, chọn **Save as PDF / Lưu dưới dạng PDF**.

## Dữ liệu học tập

Tiến trình Mission, bản vẽ, Design Canvas và trạng thái tương tác được lưu bằng `localStorage`. Dữ liệu không được gửi lên máy chủ. Nút **Làm lại Mission** xóa câu trả lời và bản vẽ của riêng nhiệm vụ này.

## Deploy GitHub Pages

1. Tạo repository mới trên GitHub.
2. Upload toàn bộ nội dung thư mục này vào thư mục gốc của repository.
3. Mở **Settings → Pages**.
4. Trong **Build and deployment**, chọn **Deploy from a branch**.
5. Chọn branch **main**, thư mục **/root**, rồi nhấn **Save**.

GitHub sẽ cung cấp địa chỉ dạng:

```text
https://TEN-TAI-KHOAN.github.io/biomimicry-learning/
```

## Tiến trình học tập

- Tuần 1–2: Design Thinking và nền tảng Biomimicry.
- Tuần 3: Observe, Function, đặt câu hỏi và nghiên cứu tự nhiên.
- Tuần 4: Biological Strategy, Mechanism và Abstract.
- Tuần 5–7: vật liệu, Moodboard, Concept Sketch và Design.
- Các tuần sau: đánh giá, tạo mẫu, hoàn thiện và trình bày dự án.

## Nguồn nội dung

- [Biomimicry Institute](https://biomimicry.org/)
- [AskNature](https://asknature.org/)
- [Biomimicry 3.8](https://www.biomimicry.net/)
- [Biomimicry Toolbox](https://toolbox.biomimicry.org/)
- `NUPs-Examples-PDF-updated.pdf`
- `Toolbox_Natures_Patterns.05122021.pdf`
- `Khoi 12 - Ke hoach giang day CNCN (1).docx`

Nội dung được tóm tắt, diễn giải và chuyển thành hoạt động giáo dục. Ảnh chân dung nhóm tác giả được cung cấp trong thư mục dự án; các sơ đồ và hình minh họa còn lại được dựng bằng HTML/CSS/SVG.

## Tương thích

- Chrome, Edge, Firefox và Safari hiện đại.
- Desktop, laptop, tablet và mobile.
- Điều hướng bàn phím, focus rõ, tương phản phù hợp và hỗ trợ `prefers-reduced-motion`.
