"use client";

import { IoIosStar } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function TestimonialSection() {

 const testimonials = [
  {
    name: "Huyền Đỗ",
    role: "Nhân viên Marketing",
    content:
      "Chuyên viên tư vấn rất nhiệt tình và phân tích cực kỳ chi tiết. Tôi lần đầu hiểu vì sao trước giờ mình luôn chọn sai màu.",
    image: "./review-21.png",
  },
  {
    name: "Minh Anh",
    role: "Nhân viên văn phòng",
    content:
      "Sau buổi phân tích màu cá nhân, tôi chỉ cần đổi màu son và màu áo là gương mặt sáng hẳn lên. Đi làm ai cũng hỏi bí quyết.",
    image: "./review-24.png",
  },
  {
    name: "Bích Ngọc",
    role: "Chủ doanh nghiệp",
    content:
      "Dịch vụ rất chuyên nghiệp, chuyên viên tư vấn tận tâm và giải thích dễ hiểu. Tôi tiết kiệm được rất nhiều tiền mua sắm.",
    image: "./REVIEW-05.jpg",
  },
  {
    name: "Phương Anhh",
    role: "Sinh viên",
    content:
      "Mình vừa trải nghiệm test personal color và rất hài lòng. Trải nghiệm nhẹ nhàng, vui và rất đáng thử!",
    image: "./review-19.png",
  },
  {
    name: "Minh Châu",
    role: "Sinh viên",
    content:
      "Test personal color cực ưng 🥰 Tư vấn nhiệt tình, áp vào makeup và trang phục thấy khác hẳn luôn!",
    image: "./hinh-07.jpg",
  },
  {
    name: "Hà Lê Thu",
    role: "Nhân sự",
    content:
      "Chuyên viên cực kỳ dễ thương và tư vấn rất có tâm. Mình được hướng dẫn từ quần áo đến phụ kiện theo đúng color palette.",
    image: "./REVIEW-09.jpg",
  },

];

  return (
    <section className="py-28 bg-[#faf7ff]">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold mb-2">
            Feedback thực tế
          </p>

          <h2 className="text-4xl font-bold">
            Khách Hàng Nói Gì Sau Khi Phân Tích Màu Cá Nhân?
          </h2>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop
          spaceBetween={24}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
          className="h-[300px]"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="
                bg-white
                rounded-3xl
                p-8
                shadow-sm
                hover:shadow-xl
                h-[250px]
                transition
                 flex flex-col justify-between
              ">

                {/* STARS */}
                <div className="flex text-primary mb-4 text-xl">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <IoIosStar key={i} />
                  ))}
                </div>

                {/* CONTENT */}
                <p className="text-gray-700 leading-relaxed mb-8">
                  “{item.content}”
                </p>

                {/* USER */}
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />

                  <div>
                    <h6 className="font-semibold">{item.name}</h6>
                    <p className="text-sm opacity-70">{item.role}</p>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}