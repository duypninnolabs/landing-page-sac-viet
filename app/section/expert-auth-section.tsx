"use client";

import Image from "next/image";
import {
  MdOutlineAutoFixHigh,
  MdDiversity1,
  MdWorkspacePremium,
} from "react-icons/md";

export default function ExpertAuthSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row gap-16 items-center">
        
        {/* IMAGE */}
        <div className="w-full md:w-1/2">
          <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
            <img
              src="./IMG_5152.jpeg"
              alt="Chuyên gia Personal Color Sắc Việt"
              className="w-full object-cover h-full"
            //   priority
            />

            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur p-4 rounded-3xl shadow-lg">
              <p className="text-multi-color font-bold text-lg">
                Chuyên gia chứng nhận Hàn Quốc
              </p>
              <p className="text-xs text-on-surface-variant">
                Đào tạo & cấp bằng quốc tế
              </p>
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="w-full md:w-1/2">
          <span className="text-multi-color font-bold tracking-widest uppercase text-sm">
            Đội Ngũ Chuyên Gia Sắc Việt
          </span>

          <h2 className="text-4xl font-bold mt-4 mb-6">
            Sắc Việt quy tụ đội ngũ chuyên viên được đào tạo bài bản
          </h2>

          {/* FEATURES */}
          <div className="grid gap-4 mb-8">

            <Feature Icon={MdWorkspacePremium}>
              Có chứng chỉ chính quy về Personal Color chuẩn quốc tế
            </Feature>

            <Feature Icon={MdOutlineAutoFixHigh}>
              Kinh nghiệm thực chiến trong nhièu sự kiện lớn test cho 100-200 người
            </Feature>

            <Feature Icon={MdDiversity1}>
              Đảm bảo sự thống nhất về phương pháp & chất lượng tư vấn
            </Feature>

            <Feature Icon={MdOutlineAutoFixHigh}>
               Mang đến trải nghiệm 100% cá nhân hóa cho khách hàng Việt
            </Feature>


          </div>

          <p className="text-on-surface-variant mb-6 leading-relaxed">
           Sắc Việt tự hào sở hữu đội ngũ chuyên gia phủ sóng đa khu vực tại Hàn Quốc (Seoul, Busan…) và Việt Nam (Hà Nội, Đà Nẵng, Nha Trang…)

          </p>

          {/* STATS */}
          <div className="grid grid-cols-2 gap-6">
            <Stat number="100%">
              Phản hồi tích cực từ khách hàng
            </Stat>

            <Stat number="5000+">
              Khách hàng đã thay đổi hình ảnh
            </Stat>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Feature ---------- */

function Feature({
  Icon,
  children,
}: {
  Icon: React.ElementType;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <Icon className="text-primary text-2xl" />
      <span className="font-semibold text-on-surface leading-relaxed">
        {children}
      </span>
    </div>
  );
}

/* ---------- Stat ---------- */

function Stat({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h4 className="font-bold text-3xl text-multi-color">{number}</h4>
      <p className="text-sm text-on-surface-variant">{children}</p>
    </div>
  );
}