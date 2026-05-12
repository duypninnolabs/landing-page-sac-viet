"use client";

import Image from "next/image";
import Link from "next/link";
import { LuMoveRight } from "react-icons/lu";
import {
  MdFaceRetouchingNatural,
  MdOutlineAnalytics,
  MdOutlinePalette,
} from "react-icons/md";

export default function ServicesSection() {
  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT IMAGE GRID */}
        <div className="relative">
          <div className="aspect-square rounded-full bg-primary/5 absolute inset-0 scale-125 -z-10"></div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-12">
              <div className="h-64 rounded-3xl overflow-hidden shadow-xl relative">
                <Image
                  src="/2A2FFA2F-D149-4E3F-88E6-94D586A5B46F_1_105_c.jpeg"
                  alt="Color Analysis"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="h-48 rounded-3xl shadow-xl bg-primary flex items-center justify-center p-6 text-on-primary text-center">
                <p className="font-bold text-xl">
                  Chuẩn Quốc Tế <br /> Hàn Quốc
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="h-48 rounded-3xl shadow-xl bg-tertiary flex items-center justify-center p-6 text-on-tertiary text-center">
                <p className="font-bold text-xl">
                  Cá Nhân Hóa <br /> 100%
                </p>
              </div>

              <div className="h-64 rounded-3xl overflow-hidden shadow-xl relative">
                <img
                  src="./IMG_9277.jpeg"
                  alt="Color Swatches"
                  
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h2 className="text-4xl font-bold mb-6 leading-tight">
              Tư vấn màu sắc cá nhân tại Sắc Việt giúp bạn:
          </h2>

          <div className="space-y-8">

            {/* PERSONAL COLOR */}
            <div>
                     <img
                  src="./97E22210-5544-4816-BAF9-2B337E72C379_1_105_c.jpeg"
                  alt="Color Swatches"
                  
                  className="object-cover sm:hidden w-[100%] h-[250px] object-top rounded-2xl mb-6"
                />
              <h4 className="font-bold text-xl text-primary mb-2 flex items-center gap-2">
                <MdOutlinePalette />
              Tư vấn màu sắc cá nhân
              </h4>

              <ul className="space-y-2 text-on-surface-variant">
  <li><span className="text-primary">✔</span> Xác định bảng màu phù hợp nhất với tông da & hình ảnh</li>
  <li><span className="text-primary">✔</span> Biết màu quần áo giúp sáng da và trẻ hơn</li>
  <li><span className="text-primary">✔</span> Phân tích tông makeup, sản phẩm phù hợp</li>
</ul>
            </div>

            {/* IMAGE CONSULTING */}
            <div>
                 <img
                  src="./ABB4C346-0229-486E-ABC1-8CCE060DE49C.jpeg"
                  alt="Color Swatches"
                  
                  className="object-cover sm:hidden w-[100%] h-[250px] rounded-2xl mb-6"
                />
              <h4 className="font-bold text-xl text-primary mb-2 flex items-center gap-2">
                <MdFaceRetouchingNatural />
                Tư vấn hình ảnh cá nhân
              </h4>

              <ul className="space-y-2 text-on-surface-variant">
                <li><span className="text-primary">✔</span> Tư vấn màu nail, màu tóc, màu trang sức phù hợp</li>
                <li><span className="text-primary">✔</span> Xác định dáng người, phong cách trang phục</li>
                <li><span className="text-primary">✔</span> Tiết kiệm tiền và thời gian khi mua sắm</li>
              </ul>
            </div>

            {/* REAL EXPERIENCE */}
            <div>
                 <img
                  src="./69CAEA43-9F41-4C5A-9A21-BFC596C84647_1_105_c.jpeg"
                  alt="Color Swatches"
                  
                  className="object-contain sm:hidden w-[100%] rounded-2xl mb-6"
                />
              <h4 className="font-bold text-xl text-primary mb-2 flex items-center gap-2">
                <MdOutlineAnalytics />
                Trải Nghiệm & Ứng Dụng Thực Tế
              </h4>

              <ul className="space-y-2 text-on-surface-variant">
                <li><span className="text-primary">✔</span> Tiết kiệm tiền và thời gian khi mua sắm</li>
                <li><span className="text-primary">✔</span> Tạo ấn tượng tốt với mọi người, tự tin hơn</li>
                <li><span className="text-primary">✔</span> Xây dựng hình ảnh chuyên nghiệp, cuốn hút hơn</li>
              </ul>
            </div>

          </div>

          <Link
            href="https://www.fresha.com/vi/a/sac-viet-personal-color-ha-noi-van-mieu-quoc-tu-giam-18a-pho-ngo-tat-to-snghrt49?pId=2808945"
            target="_blank"
          >
            <button className="mt-10 cursor-pointer text-primary font-extrabold flex items-center gap-2 hover:gap-4 transition-all">
              Đặt lịch tư vấn ngay
              <LuMoveRight />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}