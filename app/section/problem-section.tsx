"use client";

export default function ProblemSection() {
  const problems = [
    "Mua nhiều quần áo theo trend nhưng mặc lên không đẹp",
    "Trang điểm xong thấy bị già hơn tuổi hoặc nhợt nhạt hơn",
    "Không biết nhuộm tóc màu nào hợp da",
    "Tủ đồ đầy nhưng luôn cảm thấy 'không có gì để mặc'",
    "Chụp ảnh lên không tươi tắn như ngoài đời",
    "Muốn nâng cấp hình ảnh cá nhân nhưng chưa biết bắt đầu từ đâu",
  ];

  return (
    <section className="py-28 bg-[#faf7ff]">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* TITLE */}
        <h2 className="text-4xl font-bold text-multi-color mb-12">
          Bạn Có Đang Gặp Tình Trạng Này?
        </h2>

        {/* LIST */}
<ul className="text-left mx-auto mb-14 grid grid-cols-1 md:grid-cols-2 gap-4">          {problems.map((item, index) => (
            <li
              key={index}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition"
            >
              ❌ {item}
            </li>
          ))}
        </ul>

        {/* CLOSING */}
<p className="text-xl font-semibold leading-relaxed">
   NHỮNG THỨ ĐẸP  <span className="text-multi-color">
    CHƯA CHẮC ĐÃ HỢP
   </span>
  <br />
  NHƯNG <span className="text-multi-color">
   ĐÃ HỢP THÌ CHẤC CHẮN SẼ ĐẸP
  </span>
  
</p>
      </div>
    </section>
  );
}