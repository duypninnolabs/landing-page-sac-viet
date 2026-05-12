"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="pt-38 pb-28 bg-gradient-to-b from-white to-[#faf7ff]">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>

          {/* HEADLINE */}
          <h1 className="text-5xl font-bold leading-tight mb-6">
            Khám Phá{" "}
            <span className="text-multi-color">
              Màu Sắc Sinh Ra Dành Riêng Cho Bạn
            </span>
          </h1>

          {/* SUBHEADLINE */}
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Biết đúng màu sắc phù hợp giúp bạn sáng da, trẻ trung và mặc đẹp hơn
            mà không cần mua sắm lãng phí.
            <br /><br />
            Ứng dụng hệ màu Hàn Quốc đã được nghiên cứu và tinh chỉnh phù hợp
            với tông da người Việt, mang đến tư vấn cá nhân hóa chính xác
            cho thời trang, makeup, tóc và hình ảnh cá nhân.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap gap-4 mb-8">
            <button className="w-full sm:w-auto px-8 animate-zoom py-4 rounded-full bg-multi-gradient cursor-pointer text-white font-semibold shadow-lg hover:scale-105 transition">
              Đăng Ký Tư Vấn Ngay
            </button>

            <button className="w-full sm:w-auto px-8 py-4 rounded-full border border-primary cursor-pointer text-primary font-semibold hover-bg-multi-gradient hover:text-white transition duration-300">
              Nhận ưu đãi hôm nay
            </button>
          </div>

          {/* SOCIAL PROOF */}
          <div className="space-y-2 text-gray-700 text-sm">
            <p>✔ Đã tư vấn cho <strong>5000+ khách hàng</strong> Việt Nam & Hàn Quốc</p>
            <p>✔ Phân tích cá nhân hóa theo tone da – vẻ đẹp vốn có – phong cách</p>
            <p>✔ Ứng dụng ngay vào quần áo, makeup, tóc, nail, trang sức</p>
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <div className="absolute -top-6 -right-6 w-full h-full bg-primary/10 rounded-[3rem]" />

          <img
            src="./ABB4C346-0229-486E-ABC1-8CCE060DE49C.jpeg"
            alt="Personal Color Analysis"
            width={600}
            height={800}
            className="rounded-[3rem] shadow-2xl object-cover w-full h-[500px] lg:h-[600px]"
          />
        </div>

      </div>
    </section>
  );
}