import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { TESTIMONIALS_CARDS } from "./adviceCards";
import { TestimonialCard } from "./TestimonialCard";
import "./swiper-overrides.css";

export default function CarouselTestimonials() {
  return (
    <Swiper
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      pagination={{ clickable: true, dynamicBullets: true }}
      breakpoints={{
        0: { slidesPerView: 1, spaceBetween: 16 },
        375: { slidesPerView: 1, spaceBetween: 24 },
        686: { slidesPerView: 2, spaceBetween: 24 },
        912: { slidesPerView: 2, spaceBetween: 24 },
        1024: { slidesPerView: 3, spaceBetween: 72 },
      }}
      modules={[Autoplay, Pagination]}
      className="mySwiper"
      aria-roledescription="carrossel"
      aria-label="Depoimentos de clientes"
      aria-live="off"
    >
      {TESTIMONIALS_CARDS.map(({ id, avatar, name, testimony, href }) => (
        <SwiperSlide key={id}>
          <TestimonialCard
            id={id}
            avatar={avatar}
            name={name}
            testimony={testimony}
            href={href}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
