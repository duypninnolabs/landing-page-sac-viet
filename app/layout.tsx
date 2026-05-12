import type { Metadata } from "next";
import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import FloatingCTA from "./components/button-cta";
import { Toaster } from "react-hot-toast";


const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});
export const metadata: Metadata = {
  title: "Sắc Việt - Khám Phá Bảng Màu Cá Nhân",
  description: "Dịch vụ phân tích màu cá nhân dành riêng cho người Việt, giúp bạn hiểu rõ màu sắc phù hợp với làn da và phong cách của mình.",
 icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col selection:bg-primary-container selection:text-on-primary-container">{children}


<FloatingCTA/>
                       <Toaster position="top-right" />

      </body>
      

    </html>
  );
}
