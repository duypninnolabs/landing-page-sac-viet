"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [active, setActive] = useState("specialty");

  const menu = [
    { id: "specialty", label: "Chuyên môn", href: "#" },
    { id: "process", label: "Quy trình", href: "#process" },
    { id: "pricing", label: "Bảng giá", href: "#pricing" },
    { id: "reviews", label: "Cảm nhận", href: "#reviews" },
    { id: "faq", label: "FAQ", href: "#faq" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white shadow-[0_4px_20px_rgba(138,112,214,0.06)]">
      <div className="flex justify-between items-center w-full px-8 py-3 max-w-7xl mx-auto">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Sắc Việt Logo"
            width={120}
            height={80}
            className="h-20 w-auto object-contain"
            priority
          />
        </Link>

        {/* MENU */}
        <nav className="hidden md:flex gap-10 items-center">
          {menu.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              onClick={() => setActive(item.id)}
              className={`
                relative font-medium transition-all duration-300
                ${
                  active === item.id
                    ? "text-multi-color"
                    : "text-zinc-600 hover:text-multi-color"
                }

                after:absolute after:left-0 after:-bottom-1
                after:h-[2px] after:w-full
                after:bg-gradient-to-r after:from-purple-500 after:to-pink-500
                after:origin-left after:transition-transform after:duration-300
                ${
                  active === item.id
                    ? "after:scale-x-100"
                    : "after:scale-x-0 hover:after:scale-x-100"
                }
              `}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link
          href="#booking"
          className="bg-multi-gradient text-white px-6 py-2.5 rounded-full font-semibold
          transition-all duration-300
          hover:scale-105 active:scale-95
          shadow-lg shadow-multi-gradient/20"
        >
          Đặt lịch ngay
        </Link>
      </div>
    </header>
  );
}