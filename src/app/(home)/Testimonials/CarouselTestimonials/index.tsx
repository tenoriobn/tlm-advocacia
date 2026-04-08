import Image from "next/image";
import StarIcon from "public/icons/star.svg";
import { TESTIMONIALS_CARDS } from "./adviceCards";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
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
      {TESTIMONIALS_CARDS.map(({ id, avatar, name, testimony }) => (
        <SwiperSlide key={id}>
          <article
            className="bg-primary-dark max-xs:p-4 xs:p-6 rounded-sm w-full flex flex-col h-full"
            aria-labelledby={`testimonial-${id}-name`}
            aria-describedby={`testimonial-${id}-text`}
          >
            <header className="flex items-center gap-3">
              <Image
                src={avatar}
                alt={`Foto de ${name}`}
                width={60}
                height={60}
                className="w-15 h-15 object-cover rounded-full"
              />

              <div className="grid gap-1">
                <h3
                  id={`testimonial-${id}-name`}
                  className="text-xl md:text-2xl font-medium text-secondary"
                >
                  {name}
                </h3>

                <div
                  className="flex gap-1"
                  role="img"
                  aria-label="Avaliação: 5 de 5 estrelas"
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} aria-hidden="true" focusable="false" />
                  ))}
                </div>
              </div>
            </header>

            <blockquote className="flex-1 mt-6">
              <p
                id={`testimonial-${id}-text`}
                className="text-lg md:text-xl italic text-secondary-75"
              >
                {testimony}
              </p>
            </blockquote>
          </article>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
