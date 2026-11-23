import type { StoreConfig } from "../lib/stores";
export function DocsTab({ stores }: { stores: StoreConfig[] }) {
  return <div className="space-y-4">{stores.map(store => <section key={store.id} className="rounded-lg border bg-white p-4 space-y-2">
    <h2 className="font-semibold">{store.name}</h2><p>{store.notes}</p>
    <p>Nguyễn Kiều Anh Koch: 48 giờ/tuần, 3.800 € brutto, 18,27 €/giờ, từ 08/11.</p>
    <p>Triệu Văn Bình: phụ bếp, 40 giờ/tuần, 16,15 €/giờ, từ 08/11. Loại Vollzeit tạm suy từ 40 giờ/tuần.</p>
    <p>Nguyễn Hữu Hoá: Minijob bếp thứ 7, từ 13/11. Tháng này tạm sang từ Khang; hai Betrieb riêng. Repo này không đồng bộ lịch Khang.</p>
    <p>Mạnh Tuấn Tú: Minijob phụ bồi tối, từ 10/11; tạm xếp 17:00–22:00. Thị Khánh Duong: Minijob phụ bồi, từ 10/11. Giữ tên theo ảnh.</p>
    <p>Ba Minijob: 603 €/tháng, 13,90 €/giờ; mục tiêu 43 giờ/tháng theo chủ quán (phép chia chính xác khoảng 43,38 giờ). Tháng vào làm được tính tỷ lệ theo ngày bắt đầu.</p>
    <p>48/40 giờ tuần là nguồn mục tiêu; 3.800 € là thông tin lương, không thay thế giờ hợp đồng. Giờ cuối tháng được tính theo ngày vào làm.</p>
    <p>Tạm dùng năm 2026, ngày lễ München theo dự án gốc; chưa có địa chỉ xác nhận. Chỉ yêu cầu tối thiểu 1 người, chưa có định mức từng bộ phận.</p>
  </section>)}</div>;
}

