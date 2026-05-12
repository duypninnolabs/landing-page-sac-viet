"use client";

import { MdFace6, MdVerified, MdPsychology, MdAutoAwesome } from "react-icons/md";

type Problem = {
  Icon: React.ElementType;
  title: string;
  description: string;
  image: string;
};

const PROBLEMS: Problem[] = [
  {
    Icon: MdFace6,
    title: "Màu sắc dành riêng cho bạn",
    description:
      "Biết chính xác màu nào mặc lên đẹp nhất, giúp gương mặt sáng hơn và thần thái nổi bật tự nhiên.",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1200",
  },
  {
    Icon: MdVerified,
    title: "Tránh sai lầm khi lựa chọn",
    description:
      "Hiểu rõ những màu sắc nên tránh để không còn mua nhầm quần áo hoặc makeup khiến gương mặt kém sắc.",
    image:
      "https://images.unsplash.com/photo-1521334884684-d80222895322?w=1200",
  },
  {
    Icon: MdPsychology,
    title: "Phối đồ đúng tông",
    description:
      "Nắm được nguyên tắc phối màu và xây dựng phong cách cá nhân hài hòa, dễ áp dụng hằng ngày.",
    image:
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=1200",
  },
  {
    Icon: MdAutoAwesome,
    title: "Mua sắm thông minh hơn",
    description:
      "Từ nay mỗi lần mua đồ, bạn biết chính xác điều gì thật sự phù hợp với mình.",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200",
  },
];

export default function BenefitSection() {
  return (
    <section className="py-24 bg-[#f8f2f9]">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-black text-on-surface mb-4">
            Lợi ích sau buổi tư vấn
          </h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto text-lg">
            Khám phá phiên bản rạng rỡ nhất của chính bạn qua lăng kính màu sắc chuyên nghiệp.
          </p>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full mt-6" />
        </div>

        {/* Z-PATTERN SECTIONS */}
        <div className="space-y-24">

          {PROBLEMS.map((item, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-12 ${
                  isReversed ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* IMAGE */}
                <div className="flex-1 w-full">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-white p-2">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                </div>

                {/* TEXT */}
                <div className="flex-1 space-y-5">
                  <div className="inline-flex items-center justify-center size-12 rounded-2xl bg-primary/10 text-primary">
                    <item.Icon className="text-2xl" />
                  </div>

                  <h3 className="text-3xl font-bold text-on-surface">
                    {item.title}
                  </h3>

                  <p className="text-lg text-on-surface-variant leading-relaxed">
                    {item.description}
                  </p>

                  {/* mini bullet */}
                  <ul className="space-y-2 pt-2">
                    <li className="flex items-center gap-2 text-on-surface-variant">
                      <span className="text-primary">✓</span>
                      Hiểu rõ phong cách cá nhân
                    </li>
                    <li className="flex items-center gap-2 text-on-surface-variant">
                      <span className="text-primary">✓</span>
                      Tối ưu lựa chọn mua sắm
                    </li>
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-24 bg-primary/10 rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-black text-on-surface mb-4">
            Bắt đầu thay đổi diện mạo của bạn
          </h3>
          <p className="text-on-surface-variant mb-8 max-w-xl mx-auto">
            Chỉ một buổi tư vấn để hiểu rõ màu sắc phù hợp nhất với bạn.
          </p>

          <button className="bg-primary text-white px-10 py-4 rounded-2xl font-bold hover:scale-105 transition">
            Đặt lịch tư vấn ngay
          </button>
        </div>

      </div>
    </section>
  );
}