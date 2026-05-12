"use client";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";

type FAQ = {
  question: string;
  answer: string;
};

export default function FaqSection() {
  const faqs: FAQ[] = [
    {
      question: "Tôi da ngăm có làm Personal Color được không?",
      answer:
        "Có. Mỗi tone da đều có bảng màu đẹp riêng. Personal Color không phải làm bạn trắng hơn mà giúp bạn tìm đúng màu sắc khiến làn da trở nên sáng, hài hòa và nổi bật nhất.",
    },
    {
      question: "Nam có tư vấn được không?",
      answer:
        "Có. Sắc Việt tư vấn cho cả nam và nữ. Phân tích màu sắc giúp nam giới lựa chọn trang phục, kiểu tóc và hình ảnh cá nhân chuyên nghiệp hơn.",
    },
    {
      question: "Tư vấn màu sắc có thay đổi theo thời gian không?",
      answer:
        "Sắc độ da tự nhiên (Undertone) là yếu tố gần như cố định suốt đời. Nhóm màu chính của bạn sẽ không thay đổi.",
    },
    {
      question: "Cần chuẩn bị gì cho buổi tư vấn 1-1?",
      answer:
        "Để kết quả chính xác nhất, bạn vui lòng để mặt mộc hoàn toàn. Bạn có thể mang theo túi trang điểm cá nhân để chuyên gia hỗ trợ kiểm tra.",
    },
  ];

  return (
    <section id="faq" className="py-28 bg-[#faf7ff]">
      <div className="max-w-7xl mx-auto px-6">

        {/* ===== MAIN CARD ===== */}
        <div className="bg-white rounded-[40px] p-8 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.08)]">

          <div className="flex flex-col md:flex-row gap-14">

            {/* ================= LEFT COLUMN ================= */}
            <div className="w-full md:w-[40%]">

              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Câu Hỏi Thường Gặp
              </h2>
          <div className="h-1 w-24 bg-primary rounded-full" />

             
              <img
                src="./6811333F-E9AC-41FB-9632-A0DF11D62A05_1_105_c.jpeg"
                alt="consultation"
                className="mt-8 w-full h-64 object-cover rounded-[30px] shadow-sm"
              />

            </div>

            {/* ================= RIGHT COLUMN ================= */}
            <div className="w-full md:w-2/3 space-y-5">

              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="
                    group
                    border-b
                    border-gray-100
                    pb-5
                    transition
                  "
                >
                  <summary className="flex justify-between items-center cursor-pointer list-none font-semibold text-lg">
                    <span className="pr-4 w-[90%]">{faq.question}</span>

                    <MdOutlineKeyboardArrowDown
                      className="
                        text-2xl
                        
                        transition-transform
                        duration-300
                        group-open:rotate-180
                      "
                    />
                  </summary>

                  <p className="mt-4 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </details>
              ))}

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}