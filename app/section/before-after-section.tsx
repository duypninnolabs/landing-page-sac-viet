"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Case = {
  name: string;
  role: string;
  quote: string;
  before: string;
  after: string;
};

const CASES: Case[] = [
  {
    name: "Chị Minh Anh",
    role: "Nhân viên kinh doanh",
quote: "Tư vấn nhiệt tình, dễ hiểu. Không gian đẹp, rộng rãi, rất đáng trải nghiệm.",    before: "./hinh-01.jpg",
    after: "./hinh-02.jpg",
  },
  {
    name: "Chị Linh Chi",
    role: "Stylist thời trang",
    quote: "Nơi uy tín để mọi người muốn test personal color. Bạn chuyên viên tư vấn rất kỹ",
    before: "./hinh-03.jpg",
    after: "./hinh-04.jpg",
  },
  {
    name: "Chị Ngọc Hân",
    role: "Nhân viên công sở",
quote: "Tôi đã hiểu bảng màu cá nhân và biết cách phối đồ, makeup phù hợp.",    before: "./hinh-05.jpg",
    after: "./hinh-06.jpg",
  },
  {
    name: "Chị Thanh Huyền",
    role: "Marketing Executive",
    quote: "Chỉ đổi màu tóc và son mà thần thái khác hẳn.",
    before: "./hinh-07.jpg",
    after: "./hinh-08.jpg",
  },
  {
    name: "Bạn Gia Hân",
    role: "Sinh viên",
    quote: "Chỉ đổi màu tóc và son mà thần thái khác hẳn.",
    before: "./review-04.jpeg",
    after: "./review-01.jpeg",
  },
  {
    name: "Chị Hoài Thương",
    role: "Chủ shop online",
    quote: "Hiểu bảng màu giúp tôi chọn đồ bán đúng khách hơn.",
    before: "./review-03.jpeg",
    after: "./review-17.jpg",
  },
{
  name: "Thu Trang",
  role: "Nhân viên văn phòng",
  quote: "Test personal color xong mới biết trước giờ mình chọn sai màu. Áp vào nhìn khác hẳn luôn.",
  before: "./review-02.jpeg",
  after: "./review-24.png",
},
  {
    name: "Chị Bảo Trân",
    role: "Makeup Artist",
    quote: "Makeup đúng undertone giúp gương mặt sáng rõ rệt.",
    before: "./REVIEW-06.jpg",
    after: "./REVIEW-05.jpg",
  },
  {
    name: "Chị Mỹ Linh",
    role: "Nhân viên công sở",
    quote: "Đi làm nhìn chuyên nghiệp và tự tin hơn nhiều",
    before: "./REVIEW-07.jpg",
    after: "./REVIEW-09.jpg",
  },

  // 🔥 NAM (đúng hình)
  {
    name: "Anh Minh Khang",
    role: "Kỹ sư",
    quote: "Bạn tư vấn rất nhiệt tình, chân thật, đúng nhu cầu. Mn nên đi nhé rất hiệu quả",
    before: "./REVIEW-10.jpg",
    after: "./REVIEW-08.jpg",
  },

  {
    name: "Chị Ngọc Diệp",
    role: "Beauty Creator",
    quote: "Trước giờ toàn chọn màu theo cảm tính, giờ thì tự tin hơn nhiều rồi",
    before: "./REVIEW-11.jpg",
    after: "./REVIEW-12.jpg",
  },
  {
    name: "Chị Kim Anh",
    role: "Quản lý cửa hàng",
    quote: "Sau buổi tư vấn tôi hiểu rõ phong cách cá nhân của mình",
    before: "./REVIEW-13.jpg",
    after: "./REVIEW-14.jpg",
  },
];

export default function BeforeAfterSection() {
  return (
    <section 
    id="reviews"
    className="bg-surface-container-low pt-20">
      <div className="max-w-7xl mx-auto px-8">

        {/* TITLE */}
        <div className="text-center mb-12">
          <h2 className=" text-3xl sm:text-4xl font-bold mb-2">
            Sức Mạnh Của Việc "Đúng Màu"
          </h2>
          <p className="text-on-surface-variant">
            Chứng kiến sự thay đổi qua các buổi tư vấn 1-1
          </p>
        </div>

        {/* SLIDER */}
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={24}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
          className="h-[400px]"
        >
          {CASES.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl shadow-sm p-4 h-[350px]">

                {/* IMAGES */}
                <div className="flex gap-2 mb-4 h-56">

                  {/* BEFORE */}
                  <div className="flex-1 relative rounded-[0.5rem] overflow-hidden">
                    <img
                      src={item.before}
                      alt="Before"
                      
                      className="object-cover w-full h-full"
                    />
                    <span className="absolute top-2 left-2 bg-black/60 text-white px-2 py-1 text-[10px] rounded">
                      Trước
                    </span>
                  </div>

                  {/* AFTER */}
                  <div className="flex-1 relative rounded-[0.5rem] overflow-hidden">
                    <img
                      src={item.after}
                      alt="After"
                      // fill
                      className="object-cover w-full h-full"
                    />
                    <span className="absolute top-2 left-2 bg-primary text-white px-2 py-1 text-[10px] rounded">
                      Sau
                    </span>
                  </div>

                </div>

                {/* TEXT */}
                <h4 className="font-semibold">
                  {item.name} - {item.role}
                </h4>

                <p className="text-sm text-on-surface-variant mt-1">
                  "{item.quote}"
                </p>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}