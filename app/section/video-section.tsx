"use client";

import { useState } from "react";

export default function VideoSection() {
  const [open, setOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("/video1.mp4");

  // 👉 LINK GOOGLE DRIVE
  const moreVideosLink =
    "https://drive.google.com/drive/folders/1Fhccs6GjY7wZQxy7cXVMSqldQwFi_B56";

  const videos = [
    {
      title: "Giới thiệu Sắc Việt",
      src: "/video1.mp4",
    },
      {
      title: "Tại sao lại là Sắc Việt?",
      src: "/video5.mp4",
    },
    {
      title: "Tư vấn cá nhân hóa",
      src: "/video2.mp4",
    },
    {
      title: "Tư vấn cá nhân hóa",
      src: "/video3.mp4",
    },
    {
      title: "Tư vấn cá nhân hóa",
      src: "/video4.mp4",
    },
  
  ];

  const openVideo = (src: string) => {
    setCurrentVideo(src);
    setOpen(true);
  };

  return (
    <section className="py-16 bg-multi-gradient text-white">
      <div className="max-w-7xl mx-auto px-8">

        {/* TITLE */}
        <h2 className="text-4xl font-bold mb-8 text-center">
          Giới Thiệu Trung Tâm
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* MAIN VIDEO */}
          <div
            onClick={() => openVideo(videos[0].src)}
            className="md:col-span-2 relative rounded-xl overflow-hidden aspect-video cursor-pointer group"
          >
            <video
              src={videos[0].src}
              muted
              preload="metadata"
              className="w-full h-full object-cover"
            />

            {/* PLAY BUTTON */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center text-xl text-black group-hover:scale-110 transition">
                ▶
              </div>
            </div>

            <div className="absolute bottom-4 left-4">
              <p className="text-sm italic">{videos[0].title}</p>
              <p className="text-xs mt-1">Sắc Việt</p>
            </div>
          </div>

          {/* VIDEO LIST */}
          <div className="space-y-4">
            {videos.slice(1).map((video, index) => (
              <div
                key={index}
                onClick={() => openVideo(video.src)}
                className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm cursor-pointer hover:scale-[1.02] transition"
              >
                {/* VIDEO THUMB */}
                <div className="w-16 h-16 overflow-hidden rounded shrink-0">
                  <video
                    src={video.src}
                    muted
                    preload="metadata"
                    className="w-full h-full object-cover"
                    onMouseEnter={(e) => e.currentTarget.play()}
                    onMouseLeave={(e) => {
                      e.currentTarget.pause();
                      e.currentTarget.currentTime = 0;
                    }}
                  />
                </div>

                <div>
                  <p className="text-sm font-medium text-black line-clamp-1">
                    {video.title}
                  </p>
                  <p className="text-xs text-gray-500">Sắc Việt</p>
                </div>
              </div>
            ))}

            {/* 👉 XEM THEM GOOGLE DRIVE */}
            <a
              href={moreVideosLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block 
              w-[100%] text-center
              bg-multi-gradient text-white px-4 py-3 rounded-lg transition"
            >
              Xem Thêm Video <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* VIDEO POPUP */}
      {open && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE */}
            <button
              onClick={() => setOpen(false)}
              className="absolute -top-10 right-0 text-white text-3xl"
            >
              ✕
            </button>

            {/* VIDEO PLAYER */}
            <video
              key={currentVideo}
              src={currentVideo}
              controls
              autoPlay
              className="w-full h-full rounded-xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}