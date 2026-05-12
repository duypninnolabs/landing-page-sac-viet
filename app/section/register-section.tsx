"use client";

import { FormEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function RegisterSection() {
  const [loading, setLoading] = useState(false);

  /* ================= COUNTDOWN ================= */

  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev <= 1 ? 0 : prev - 1));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const days = Math.floor(timeLeft / 86400);
  const hours = Math.floor((timeLeft % 86400) / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  /* ================= SUBMIT ================= */

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;

    const form = e.currentTarget;

    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value.trim();
    const nhu_cau = (form.elements.namedItem("nhu_cau") as HTMLInputElement).value.trim();

    if (!name || !phone || !nhu_cau) {
      toast.error("Vui lòng nhập đầy đủ thông tin");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, nhu_cau }),
      });

      const result = await res.json();

      if (result.success) {
        toast.success("Đăng ký thành công!");
        form.reset();
      } else {
        toast.error("Gửi thất bại!");
      }
    } catch {
      toast.error("Lỗi kết nối server!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="booking"
      className="py-24 px-4 bg-gradient-to-b from-white via-blue-50/40 to-white"
    >
      <div className="max-w-6xl mx-auto bg-white rounded-[3rem] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.08)]">

        {/* ===== MAIN GRID ===== */}
        <div className="flex flex-col md:flex-row">

          {/* ================= LEFT IMAGE ================= */}
          <div className="relative md:w-1/2 h-[320px] md:h-auto">

            <img
              src="./BMT_0231.jpeg"
              alt="students"
              className="w-full h-full object-cover"
            />

            {/* overlay */}
            <div className="absolute inset-0 bg-black/20 flex items-end p-8 text-white">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                <p className="text-lg italic font-semibold">
                  "Bạn không cần thay đổi gương mặt—chỉ cần thay đổi màu"
                </p>
                <p className="text-sm opacity-90 mt-1">
                  — Tham gia cùng +1,500 học viên đã thành công
                </p>
              </div>
            </div>
          </div>

          {/* ================= RIGHT FORM ================= */}
          <div className="md:w-1/2 p-10 md:p-14">

            <div className="text-center mb-10">
              <h2 className="text-4xl font-bold text-red-600 mb-4">
                Ưu đãi hôm nay
              </h2>

              <p className="font-bold text-red-600 text-lg mb-6 animate-pulse">
                🔥 5 SUẤT HỌC ĐANG ĐƯỢC GIỮ CHỖ
              </p>

              {/* COUNTDOWN */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                <TimeBox value={days} label="Ngày" />
                <TimeBox value={hours} label="Giờ" />
                <TimeBox value={minutes} label="Phút" />
                <TimeBox value={seconds} label="Giây" />
              </div>

              <p className="text-gray-500 mb-6">
                Đăng ký tư vấn ngay hôm nay để nhận:
              </p>

              <div className="flex flex-wrap justify-center gap-3">
                <Benefit text="Mini guide chọn màu cơ bản" />
                <Benefit text="Ưu tiên lịch sớm" />
              </div>
            </div>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input name="name" placeholder="Họ và tên" />
              <Input name="phone" placeholder="Số điện thoại" type="tel" />
              <Input name="nhu_cau" placeholder="Nhu cầu tư vấn" />

              <button
                disabled={loading}
                className="
                  w-full
                  bg-multi-gradient
                  cursor-pointer
                  text-white
                  animate-zoom
                  py-5
                  rounded-full
                  font-bold
                  text-lg
                  shadow-xl
                  shadow-primary/30
                  transition
                  
                  active:scale-95
                "
              >
                {loading ? "Đang gửi..." : "Nhận Tư Vấn Ngay"}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ================= COMPONENTS ================= */

function TimeBox({
  value,
  label,
}: {
  value: number;
  label: string;
}) {
  return (
    <div className="text-center">
      <div
        className="
          bg-red-600 text-white font-bold rounded-2xl shadow-lg
          min-w-[12px] sm:min-w-[70px] md:min-w-[90px]
          py-6
          sm:px-5 sm:py-3
          md:px-6 md:py-4
          text-2xl sm:text-3xl md:text-4xl
        "
      >
        {String(value).padStart(2, "0")}
      </div>

      <p className="mt-2 text-xs sm:text-sm md:text-base text-gray-500">
        {label}
      </p>
    </div>
  );
}

function Benefit({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2 bg-blue-50 rounded-full px-4 py-2">
      🎁 <span className="font-semibold text-gray-800">{text}</span>
    </div>
  );
}

function Input({
  name,
  placeholder,
  type = "text",
}: {
  name: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <input
      name={name}
      type={type}
      required
      placeholder={placeholder}
      className="
        w-full
        border border-gray-200
        rounded-full
        px-6 py-4
        text-lg
        outline-none
        transition
        focus:border-primary
        focus:ring-4
        focus:ring-primary/10
      "
    />
  );
}