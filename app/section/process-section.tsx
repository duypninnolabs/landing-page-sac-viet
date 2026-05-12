"use client";

import Link from "next/link";
import { MdAutoAwesome, MdFace6, MdPsychology, MdVerified } from "react-icons/md";

export default function ProcessSection() {
  const steps = [
    {
      Icon: MdFace6,
      number: "01",
      title: "Phân tích tổng quan",
      desc: "Đánh giá tone da, sắc tố, khí chất và phong cách hiện tại để xác định nền tảng hình ảnh cá nhân.",
      image:
        "./IMG_9277.jpeg",
    },
    {
      Icon: MdVerified,
      number: "02",
      title: "Test màu Draping",
      desc: "Trực tiếp trải nghiệm với hệ thống vải màu draping chuẩn Hàn dưới ánh sáng tiêu chuẩn để tìm bảng màu đẹp nhất.",
      image:
        "./IMG_5541.JPG",
    },
    {
      Icon: MdPsychology,
      number: "03",
      title: "Ứng dụng thực tế",
      desc: "Tư vấn quần áo, son môi, makeup, màu tóc, phụ kiện và định hướng hình ảnh cá nhân phù hợp nhất.",
      image:
        "./1191B479-7A2D-4FC8-A8D0-79BDE45C3052_1_201_a.jpeg",
    },
    {
      Icon: MdAutoAwesome,
      number: "04",
      title: "Nhận giải pháp cá nhân hóa",
      desc: "Nhận bảng màu cá nhân, tài liệu hướng dẫn phối đồ lâu dài và checklist mỹ phẩm tối ưu để áp dụng ngay.",
      image:
        "./1.png",
    },
  ];

  return (
    <section
      id="process"
      className="process-section py-24 rounded-t-[4rem]"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-black text-on-surface mb-5">
            Quy trình chuẩn hóa quốc tế
            <span className="text-multi-color"> 4 bước tại Sắc Việt</span>
          </h2>

          <p className="text-on-surface-variant max-w-3xl mx-auto text-lg leading-relaxed">
            Trải nghiệm quy trình phân tích màu sắc cá nhân chuẩn Hàn Quốc,
            giúp bạn hiểu rõ màu sắc phù hợp nhất với khí chất và phong cách riêng.
          </p>

          <div className="h-1 w-24 bg-primary mx-auto rounded-full mt-6" />
        </div>

        {/* Z-PATTERN */}
        <div className="space-y-4 sm:space-y-28">

          {steps.map((step, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-14 ${
                  isReversed ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* IMAGE */}
                <div className="flex-1 w-full">
                  <div className="group relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                </div>

                {/* TEXT */}
                <div className="flex-1">
                  <div className="inline-flex items-center justify-center size-14 rounded-2xl bg-primary/10 text-primary mb-6">
                    <step.Icon className="text-3xl" />
                  </div>

                  <h3 className="text-2xl md:text-3xl font-black text-on-surface mb-2 leading-tight">
                    <span className="text-primary mr-2">
                      {step.number}
                    </span>
                    {step.title}
                  </h3>

                  <p className="text-lg text-on-surface-variant leading-relaxed mb-8">
                    {step.desc}
                  </p>

            
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-28 relative overflow-hidden rounded-[2rem] p-12 md:p-16 text-center bg-primary/10">

          <div className="absolute inset-0 bg-multi-gradient" />

          <div className="relative z-10 text-white">
            <h3 className="text-3xl md:text-4xl font-black text-on-surface mb-4">
              Bắt đầu hành trình thay đổi diện mạo của bạn
            </h3>

            <p className="text-on-surface-variant mb-5 max-w-2xl mx-auto text-lg leading-relaxed">
              Chỉ một buổi tư vấn để khám phá bảng màu giúp bạn
              nổi bật tự nhiên, sang trọng và cuốn hút hơn mỗi ngày.
            </p>

       <Link
            href="https://www.fresha.com/vi/a/sac-viet-personal-color-ha-noi-van-mieu-quoc-tu-giam-18a-pho-ngo-tat-to-snghrt49?pId=2808945"
            target="_blank"
        
        
        className="px-8 block w-[100%] sm:w-[250px] mx-auto animate-zoom py-4 rounded-full bg-multi-gradient cursor-pointer  text-white font-semibold shadow-lg hover:scale-105 transition">
              Đăng lịch ngay
            </Link>

          </div>
        </div>

      </div>
    </section>
  );
}