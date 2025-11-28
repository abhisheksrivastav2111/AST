"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css"; 
import "swiper/css/autoplay";

import Hero from "./Hero";
import { Article } from "@/lib/api";

interface HeroSliderProps {
  articles: Article[];
}

export default function HeroSlider({ articles }: HeroSliderProps) {
  return (
    <div className="mb-8">
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop
        speed={800}
        slidesPerView={1}
        className="rounded-xl"
      >
        {articles.map((article) => (
          <SwiperSlide key={article.id}>
            <Hero article={article} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
