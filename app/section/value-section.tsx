"use client";

import Image from "next/image";
import { MdOutlineAutoFixHigh, MdOutlineVolunteerActivism, MdShoppingCartCheckout } from "react-icons/md";

export default function ValueSection() {
  return (
    <section className="value-section py-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-4xl font-bold mb-8 leading-tight">
              Giá Trị Thực Từ <br /> Việc Thấu Hiểu Hình Ảnh
            </h2>

            <div className="space-y-8">

              {/* ITEM 1 */}
              <div className="flex gap-6">
                <div className="w-14 h-14 shrink-0 rounded-full bg-primary-container bg-[#c9b6ff] flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-3xl">
                    <MdOutlineVolunteerActivism />
                  </span>
                </div>

                <div>
                  <h4 className="font-bold text-xl mb-2">
                    Tự tin tuyệt đối
                  </h4>
                  <p className="text-on-surface-variant">
                    Sự thấu hiểu về bản thân mang lại sự tự tin từ sâu bên trong,
                    thể hiện qua phong cách rạng rỡ.
                  </p>
                </div>
              </div>

              {/* ITEM 2 */}
              <div className="flex gap-6">
                <div className="w-14 h-14 shrink-0 rounded-full bg-secondary-container bg-[#acedff] flex items-center justify-center text-[#00687b]">
                  <span className="material-symbols-outlined text-3xl">
                    <MdShoppingCartCheckout />
                  </span>
                </div>

                <div>
                  <h4 className="font-bold text-xl mb-2">
                    Đầu tư thông minh
                  </h4>
                  <p className="text-on-surface-variant">
                    Không còn lãng phí ngân sách cho những món đồ
                    "không thuộc về mình". Mỗi món đồ đều có giá trị sử dụng cao.
                  </p>
                </div>
              </div>

              {/* ITEM 3 */}
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-[#fe9da9] shrink-0 rounded-full bg-tertiary-container flex items-center justify-center text-[#944752]">
                  <span className="material-symbols-outlined text-3xl">
                    <MdOutlineAutoFixHigh />
                  </span>
                </div>

                <div>
                  <h4 className="font-bold text-xl mb-2">
                    Xây dựng hình ảnh ổn định
                  </h4>
                  <p className="text-on-surface-variant">
                    Dễ dàng mix-match và duy trì vẻ ngoài chỉn chu
                    nhờ sự đồng bộ về sắc độ và phong cách cá nhân.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="bg-surface-container rounded-[4rem] p-4 rotate-3 transform">
            <img
              src="https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/634016200_122228205788092589_5733929508605851381_n.jpg"
              alt="organized elegant wardrobe"
              width={600}
              height={800}
              className="rounded-[3.5rem] w-full h-full object-fill aspect-[3/4] shadow-2xl"
            />
          </div>

        </div>
      </div>
    </section>
  );
}