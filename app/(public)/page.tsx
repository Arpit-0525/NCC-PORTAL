"use client";

import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper/modules";

export default function HomePage() {
  const router = useRouter();

  const slides = [
    "/images/parade1.jpg",
    "/images/parade2.jpg",
    "/images/parade3.jpg",
  ];

  const categories = [
    { title: "Sports", img: "/images/sports.jpg" },
    { title: "National Camps", img: "/images/camps.jpg" },
    { title: "Achievements", img: "/images/achievements.jpg" },
    { title: "Training", img: "/images/training.jpg" },
    { title: "Social Activities", img: "/images/social.jpg" },
    { title: "Adventure", img: "/images/adventure.jpg" },
  ];

  return (
    <div className="bg-white">

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 bg-blue-900 text-white flex justify-between items-center px-8 py-4 shadow-md">
        <h1 className="text-lg font-semibold">
          NCC Portal
        </h1>

        <button
          onClick={() => router.push("/dashboard")}
          className="bg-white text-blue-900 px-4 py-2 rounded-md text-sm font-medium"
        >
          Enter Portal
        </button>
      </header>

      {/* HERO */}
      <div className="w-screen h-screen relative overflow-hidden">

        <Swiper
          modules={[Autoplay, EffectFade]}
          autoplay={{ delay: 3000 }}
          effect="fade"
          loop
          className="h-full"
        >
          {slides.map((src, i) => (
            <SwiperSlide key={i}>
              <img
                src={src}
                className="w-screen h-screen object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-4xl md:text-5xl font-bold">
            National Cadet Corps
          </h1>

          <p className="text-gray-200 mt-4 max-w-xl">
            Unity and Discipline — Empowering youth through training,
            leadership and service to the nation.
          </p>
        </div>

      </div>

      {/* STATS */}
      <div className="grid grid-cols-2 md:grid-cols-4 text-center py-8 bg-gray-100">

        <div>
          <h2 className="text-xl font-bold text-red-600">365094</h2>
          <p className="text-sm text-gray-600">Cadets Registered</p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-red-600">221464</h2>
          <p className="text-sm text-gray-600">Activities Published</p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-red-600">778920</h2>
          <p className="text-sm text-gray-600">Contributions</p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-blue-600">55,07,184</h2>
          <p className="text-sm text-gray-600">Visitors</p>
        </div>

      </div>

      {/* CADET'S CORNER */}
      <section className="py-16 bg-white">

        <div className="text-center mb-10">
          <div className="flex justify-center items-center gap-2">
            <div className="w-2 h-6 bg-blue-600"></div>
            <div className="w-2 h-6 bg-red-600"></div>

            <h2 className="text-2xl font-bold text-red-600">
              Cadet's Corner
            </h2>
          </div>

          <p className="text-gray-500 mt-2">
            Activities performed by NCC cadets across the country
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">

          {categories.map((cat, i) => (
            <div key={i} className="text-center group cursor-pointer">

              <div className="overflow-hidden rounded-lg">
                <img
                  src={cat.img}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <p className="mt-3 font-semibold text-gray-900">
                {cat.title}
              </p>

            </div>
          ))}

        </div>

      </section>

    </div>
  );
}