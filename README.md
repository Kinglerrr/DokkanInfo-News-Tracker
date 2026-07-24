🌍 **Ngôn ngữ / Language:** [🇻🇳 Tiếng Việt](README.md) | [🇺🇸 English](README-en.md)
---

# 🐉 Dokkan News Tracker (Chrome Extension)

Một tiện ích mở rộng gọn nhẹ dành cho Google Chrome giúp bạn không bao giờ bỏ lỡ bất kỳ tin tức mới nào từ **Dokkan Battle**. Tiện ích sẽ âm thầm chạy ngầm và gửi thông báo trực tiếp đến màn hình máy tính của bạn ngay khi có sự kiện mới!

## ✨ Tính năng nổi bật

*   **Cập nhật thời gian thực:** Tự động lấy dữ liệu tin tức mới nhất từ trang web (Phiên bản Tiếng Anh).
*   **Mini Dashboard:** Giao diện xem nhanh tin tức gọn gàng, đẹp mắt ngay trên thanh công cụ của trình duyệt.
*   **Thông báo hệ thống (Push Notifications):** Hiển thị thông báo dạng Pop-up của Windows/Mac ngay khi có bài báo mới.
*   **Tùy chỉnh linh hoạt:** Cho phép người dùng tự cài đặt thời gian kiểm tra ngầm (từ 1 phút đến 3 giờ) để tối ưu hóa hiệu suất và tránh bị trang web chặn kết nối.
*   **Tối ưu và Nhẹ nhàng:** Xử lý dữ liệu JSON nhanh chóng, không tiêu tốn RAM, vượt qua các rào cản bảo mật CORS một cách mượt mà.

## 📂 Cấu trúc thư mục

Dự án bao gồm các tệp tin chính sau:
*   `manifest.json`: Tệp cấu hình gốc của tiện ích (Sử dụng chuẩn Manifest V3 mới nhất).
*   `background.js`: Tiến trình chạy ngầm (Service Worker), xử lý đồng hồ báo thức và gửi lệnh thông báo.
*   `popup.html` & `popup.css`: Khung giao diện HTML và thiết kế CSS của Mini Dashboard.
*   `popup.js`: Script xử lý logic lấy dữ liệu từ máy chủ và in lên giao diện bảng điều khiển.
*   `icon.png`: Biểu tượng của tiện ích.

## 🚀 Hướng dẫn cài đặt

Vì tiện ích này đang ở dạng mã nguồn gốc (Unpacked), bạn sẽ cài đặt nó thông qua **Chế độ dành cho nhà phát triển (Developer Mode)** của trình duyệt Google Chrome bằng các bước sau:

1. Tải toàn bộ mã nguồn của dự án này và đặt chung vào một thư mục trên máy tính của bạn (ví dụ: `Dokkan_Extension`).
2. Mở trình duyệt Google Chrome.
3. Sao chép và dán đường dẫn này vào thanh địa chỉ để mở trang Quản lý Tiện ích: `chrome://extensions/`
4. Ở góc trên cùng bên phải của trang, bật công tắc **Chế độ cho nhà phát triển (Developer mode)**.
5. Nhấp vào nút **Tải tiện ích đã giải nén (Load unpacked)** xuất hiện ở thanh menu trên cùng bên trái.
6. Cửa sổ chọn thư mục hiện ra, hãy chọn đúng thư mục `Dokkan_Extension` mà bạn đã lưu ở Bước 1.
7. Hoàn tất! Tiện ích đã được thêm vào trình duyệt. Hãy nhấp vào biểu tượng mảnh ghép (Extensions) ở góc phải thanh địa chỉ và chọn **Ghim (Pin)** để tiện ích luôn hiển thị.

## 💡 Hướng dẫn sử dụng

*   **Xem tin tức:** Nhấp vào biểu tượng của tiện ích để mở bảng tin tức. Bạn có thể nhấp vào bất kỳ bài báo nào để mở thẳng tab mới xem chi tiết.
*   **Cài đặt thời gian:** Chuyển sang thẻ **Settings** trong giao diện để thay đổi khoảng thời gian hệ thống tự động quét ngầm (Khuyên dùng: 5 phút hoặc 15 phút).

---
*Được phát triển với niềm đam mê dành cho Dokkan Battle!*
