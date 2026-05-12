"use client";

import { IoCheckmarkOutline } from "react-icons/io5";

type Package = {
  name: string;
  desc: string;
  price: string;
  unit: string;
    image: string;
  features: string[];
  highlight?: boolean;
  link?: string; 

};

const PACKAGES: Package[] = [
  {
    name: "Trải Nghiệm",
    desc: "Làm quen với màu sắc, dành cho người mới",
    price: "350K",
    image:"./BMT_0231.jpeg",
    unit: "",
    features: [
      "Nhận diện tông da (ấm / lạnh / trung tính / olive)",
      "Đánh giá độ sáng da (skintone)",
      "Gợi ý màu trang phục nên dùng & nên tránh",
      "Gợi ý màu son phù hợp",
    ],
    link:
      "https://www.fresha.com/vi/a/sac-viet-personal-color-ha-noi-van-mieu-quoc-tu-giam-18a-pho-ngo-tat-to-snghrt49/booking?offerItems=sv%3A27166079&pId=2808945&cartId=3040d8ae-ba2a-4803-8da3-0ed9daa9736f",
  },

  {
    name: "Basic",
    desc: "CHUYÊN SÂU – Dành cho người muốn hiểu rõ & áp dụng",
    price: "800K",
    image:"./ABB4C346-0229-486E-ABC1-8CCE060DE49C.jpeg",
    unit: "",
    features: [
      "Bao gồm tất cả nội dung của gói Trải Nghiệm",
      "Định hướng phong cách & hình ảnh cá nhân",
      "Tư vấn tone makeup phù hợp",
      "Gợi ý sản phẩm makeup (nền, son, má…)",
    ],
    link:
      "https://www.fresha.com/vi/a/sac-viet-personal-color-ha-noi-van-mieu-quoc-tu-giam-18a-pho-ngo-tat-to-snghrt49/booking?offerItems=sv%3A26598918&pId=2808945&cartId=39e702f0-3d19-48e6-8048-0cc718a71a0f",
  },

  {
    name: "Premium",
    desc: "CHUYÊN SÂU – Phổ biến nhất",
    price: "1.200K",
    image:"./2A2FFA2F-D149-4E3F-88E6-94D586A5B46F_1_105_c.jpeg",
    unit: "",
    highlight: true,
    features: [
      "Bao gồm tất cả nội dung của gói Basic",
      "Phân tích phong cách cá nhân chi tiết",
      "Review & chỉnh outfit thực tế",
      "Trang điểm nâng cao",
      "Trải nghiệm test trực tiếp layout makeup phù hợp",
    ],
    link:
      "https://www.fresha.com/vi/a/sac-viet-personal-color-ha-noi-van-mieu-quoc-tu-giam-18a-pho-ngo-tat-to-snghrt49/booking?offerItems=sv%3A27168319&pId=2808945&cartId=fb017080-6780-4e19-a078-387d19f6f90a",
  },

  {
    name: "Luxury",
    desc: "CAO CẤP – Nâng cấp hình ảnh toàn diện",
    price: "5.000K",
    image:"./6811333F-E9AC-41FB-9632-A0DF11D62A05_1_105_c.jpeg",
    unit: "",
    features: [
      "Bao gồm tất cả nội dung của gói Premium",
      "Tư vấn hình ảnh từ A–Z",
      "Phân tích thời trang chuyên sâu",
      "Tư vấn dáng người – kiểu dáng – chất liệu – hoạ tiết",
      "Hồ sơ màu sắc & hình ảnh cá nhân hoá (45 trang)",
    ],
    link:
      "https://www.fresha.com/vi/a/sac-viet-personal-color-ha-noi-van-mieu-quoc-tu-giam-18a-pho-ngo-tat-to-snghrt49/booking?offerItems=sv%3A27168319&pId=2808945&cartId=69769995-2b61-49ef-9209-9e064fa6e423",
  },

  {
    name: "Đồng Hành",
    desc: "Đồng hành trực tiếp cùng chuyên gia",
    price: "10TR",
    image:"./IMG_9277.jpeg",
    unit: "",
    features: [
      "Đồng hành trong quá trình thay đổi hình ảnh",
      "Personal shopping tại cửa hàng",
      "Chọn đồ phù hợp theo vóc dáng & màu sắc",
      "Tối ưu tủ đồ hiện có",
      "Xây dựng outfit theo từng hoàn cảnh",
    ],
    link:
      "https://www.fresha.com/vi/a/sac-viet-personal-color-ha-noi-van-mieu-quoc-tu-giam-18a-pho-ngo-tat-to-snghrt49/booking?cartId=0d8e5f11-4e47-40bf-a826-7d5acf6852d1",
  },
];
export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-surface-container bg-[#f2ecf4] scroll-mt-28">
      <div className="max-w-7xl mx-auto px-8">
        {/* TITLE */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            TƯ VẤN 1 LẦN - DÙNG CẢ ĐỜI
          </h2>

          <p className="text-on-surface-variant">
            Đầu tư cho hình ảnh là khoản đầu tư sinh lời bền vững nhất
          </p>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-3  lg:grid-cols-5 gap-6">
          {PACKAGES.map((pkg, index) => (
            <div
              key={index}
              className={`p-6 bg-white rounded-3xl flex flex-col transition-all
              ${
                pkg.highlight
                  ? "border-2  border-primary shadow-xl scale-105 relative z-10"
                  : "bg-surface-container-lowest shadow-sm"
              }`}
            >

              {pkg.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-multi-gradient text-on-primary px-4 py-1 rounded-full text-[10px] font-bold uppercase">
                  Phổ biến nhất
                </div>
              )}
                      {/* <img src={pkg.image} alt="Hình ảnh minh họa" className="w-full h-[250px] object-cover rounded-lg mb-4" /> */}


              <h3 className="text-xl font-bold mt-3 mb-2">{pkg.name}</h3>

              <p className="text-on-surface-variant mb-4 text-xs">
                {pkg.desc}
              </p>

              <div className="text-2xl font-extrabold text-multi-color mb-6">
                {pkg.price}{" "}
                <span className="text-xs font-normal text-on-surface-variant">
                  {pkg.unit}
                </span>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {pkg.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs">
                    <span className="material-symbols-outlined text-sm text-primary mt-0.5">
                      <IoCheckmarkOutline />
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => pkg.link && window.open(pkg.link, "_blank")}
                className={`w-full cursor-pointer py-2.5 rounded-full font-bold text-sm transition-colors
                ${
                  pkg.highlight
                    ? "bg-multi-gradient animate-zoom text-on-primary shadow-lg shadow-primary/30 duration-300"
                    : "border-2 border-primary text-primary hover-bg-multi-gradient hover:text-white duration-300"
                }`}
              >
                {pkg.highlight ? "Đăng ký ngay" : "Đăng ký"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}