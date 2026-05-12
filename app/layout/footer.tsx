"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-20 pb-7 text-sm">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* BRAND */}
        <div>
          <h3 className="text-2xl font-black mb-4">
            Sắc Việt Personal Color
          </h3>

          <p className="leading-relaxed text-white/80 mb-6">
            Trung tâm tư vấn màu sắc cá nhân chuẩn Hàn Quốc giúp bạn
            thấu hiểu hình ảnh, nâng cấp phong cách và tự tin hơn mỗi ngày.
          </p>

          <Link
            href="https://www.fresha.com/vi/a/sac-viet-personal-color-ha-noi-van-mieu-quoc-tu-giam-18a-pho-ngo-tat-to-snghrt49?pId=2808945"
            target="_blank"
            className="inline-block bg-white text-primary font-bold px-6 py-3 rounded-full hover:scale-105 transition"
          >
            Đặt lịch tư vấn
          </Link>
        </div>

        {/* SERVICES */}
        <div>
          <h4 className="font-bold mb-5 text-lg">
            Dịch vụ
          </h4>

          <ul className="space-y-3 text-white/80">
            <li>Phân tích Personal Color</li>
            <li>Tư vấn hình ảnh cá nhân</li>
            <li>Test màu Draping chuẩn Hàn</li>
            <li>Tư vấn Makeup & Phong cách</li>
          </ul>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="font-bold mb-5 text-lg">
            Thông tin
          </h4>

          <ul className="space-y-3 text-white/80">
            <li><Link href="#">Giới thiệu</Link></li>
            <li><Link href="#">Quy trình tư vấn</Link></li>
            <li><Link href="#">Khách hàng trải nghiệm</Link></li>
            <li><Link href="#">Liên hệ</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="font-bold mb-5 text-lg">
            Studio Sắc Việt
          </h4>

          <p className="text-white/80 mb-4">
            Văn Miếu – Quốc Tử Giám, 18A Phố Ngô Tất Tố, Hà Nội


          </p>

          <p className="text-white/80 mb-6">
            Hotline: 096 126 98 58
          </p>
          <p className="text-white/80 mb-6">
            Email: sacvietatelier@gmail.com
          </p>

          
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="max-w-7xl mx-auto px-8 mt-16 pt-8 border-t border-white/20 text-center text-white/70">
        © {new Date().getFullYear()} Sắc Việt Personal Color. All Rights Reserved.
      </div>
    </footer>
  );
}