"use client";

import Image from "next/image";
import {
  MdOutlineAutoFixHigh,
  MdOutlineVolunteerActivism,
  MdScience,
  MdFaceRetouchingNatural,
  MdCheckCircle,
} from "react-icons/md";

export default function AboutSection() {
  return (
    <section className="py-28 bg-gradient-to-b from-white via-blue-50/40 to-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* ===== LEFT CONTENT ===== */}
          <div>

            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-10">
              Vì sao khách hàng chọn <span className="text-multi-color">Sắc Việt?</span>
            </h2>

            <div className="space-y-6">

              <Item
                text="Phân tích dành riêng cho gương mặt & tone da người Việt"
              />

             <Item
  text={
    <>
      Hệ thống thẻ màu da được nghiên cứu từ năm 1996{" "}
      <span className="text-primary font-semibold">
        (Tổng kết từ 20.000+ khách hàng Hàn Quốc và hơn 5.000+ khách hàng Việt Nam)
      </span>
    </>
  }
/>
              <Item
                text="Tư vấn thực tế, dễ áp dụng ngay"
              />

              <Item
                text="Lý thuyết mang tính khoa học, không chung chung"
              />

              <Item
                text="Giúp đẹp hơn theo cách tự nhiên nhất"
              />

              <Item
                text="Quy trình test trực tiếp — thấy rõ sự khác biệt"
              />

            </div>
          </div>

          {/* ===== RIGHT IMAGE ===== */}
          <div className="relative">

            <div className="absolute inset-0 bg-primary/10 blur-[120px] rounded-full -z-10" />

            <div className="rounded-[3rem] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.12)] rotate-2 hover:rotate-0 transition duration-500">
              <img
                src="./IMG_3388.JPG"
                alt="Khách hàng Sắc Việt"
                width={600}
                height={800}
                className="object-cover w-full h-full aspect-[3/4]"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

/* ===== ITEM COMPONENT ===== */

function Item({ text }: { text: React.ReactNode }) {
  return (
    <div className="flex items-start gap-5">
      <p className="text-lg text-gray-600 leading-relaxed">
        <span className="text-primary mr-2">✔</span>
        {text}
      </p>
    </div>
  );
}