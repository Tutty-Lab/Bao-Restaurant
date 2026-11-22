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
- Mạnh Tuấn Tú: Minijob phụ bồi tối, từ 10/11; tạm giới hạn ca 17:00–22:00.
- Thị Khánh Duong: Minijob phụ bồi, từ 10/11. Giữ tên theo ảnh.
- Ba Minijob chưa có giờ/lương: mục tiêu 0 chờ nhập, không đoán số giờ.
- Thứ 2–6: 11:30–15:00 / 17:00–22:00. Thứ 7/CN/lễ: 16:00–22:00.
- Năm tạm 2026. Địa chỉ trống; lịch lễ München kế thừa tạm, cần xác nhận địa phương.
- Hợp đồng tuần ưu tiên 48/40h; lương tháng chỉ ghi nhận. Không tạo chấm công thực tế từ ảnh.
- Chưa có định mức nhân sự: tối thiểu một người mỗi khung mở. Cảnh báo thiếu giờ cần xem khi tạo lịch.

Các bài kiểm thử chung kế thừa dùng dữ liệu fixture riêng; restaurant.test.ts kiểm tra dữ liệu Bảo.
