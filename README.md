# Quán Bảo

Git repo độc lập, dựa trên Khang-Ngon-Restaurant. Không sao chép .env, dữ liệu chấm công, lịch sử Git hoặc liên kết deploy.

## Chạy

npm ci
npm run dev
npm run build
npm test

Mật khẩu ban đầu: `1991`. Lưu cục bộ namespace `bao-app`; muốn đồng bộ cần Supabase riêng.

## Dữ liệu hai ảnh

- Nguyễn Kiều Anh Koch: 48h/tuần, 3.800 € brutto, 18,27 €/h, từ 08/11.
- Triệu Văn Bình: phụ bếp, 40h/tuần, 16,15 €/h, từ 08/11. Tạm phân loại Vollzeit.
- Nguyễn Hữu Hoá: Minijob bếp thứ 7, từ 13/11; tạm sang từ Khang tháng này. Hai Betrieb riêng. Không liên kết lịch Khang trong repo này.
- Mạnh Tuấn Tú: Minijob phụ bồi tối, từ 10/11; ca tối linh hoạt theo giờ mở cửa (từ 16:00 vào thứ 7/CN/lễ, từ 17:00 ngày thường).
- Thị Khánh Duong: Minijob phụ bồi, từ 10/11. Giữ tên theo ảnh.
- Ba Minijob: 603 €/tháng, 13,90 €/giờ, mục tiêu 43 giờ/tháng theo chủ quán. Phép chia chính xác khoảng 43,38 giờ; dùng 43 giờ đã chốt. Quỹ Minijob giữ đủ 43 giờ trong tháng vào làm; ngày bắt đầu chỉ giới hạn ngày được xếp ca.
- Thứ 2–6: 11:30–15:00 / 17:00–22:00. Thứ 7/CN/lễ: 16:00–22:00.
- Năm tạm 2026. Địa chỉ trống; lịch lễ München kế thừa tạm, cần xác nhận địa phương.
- Hợp đồng tuần ưu tiên 48/40h; lương tháng chỉ ghi nhận. Không tạo chấm công thực tế từ ảnh.
- Chưa có định mức nhân sự: tối thiểu một người mỗi khung mở. Cảnh báo thiếu giờ cần xem khi tạo lịch.

Các bài kiểm thử chung kế thừa dùng dữ liệu fixture riêng; restaurant.test.ts kiểm tra dữ liệu Bảo.

## Môi trường

Local Vite luôn dùng store_id dev-bao. Production mặc định bao. Hai hàng tách trong cùng Supabase stundenzettel; không phải database dev độc lập. .env.local kéo từ Vercel Development, không commit.




Quán mới: hệ số tất cả các ngày và tất cả khung giờ đều 1; không phân cao điểm. Khung Bếp/Bồi trong debug chỉ để kiểm tra độ phủ.


Khi thêm nhân viên/đổi giờ mở cửa: tạo lại lịch để áp dụng. Bảo ưu tiên theo ngày có thể làm, không theo nhóm hợp đồng; không tự xếp trước giờ mở để bù thiếu. Thiếu sức chứa vẫn hiện cảnh báo, không tự đổi hợp đồng. Kiểm thử futureConfiguration.test.ts bao gồm thêm người, đổi giờ, ngày đóng/ngoại lệ và đổi thứ tự danh sách.

