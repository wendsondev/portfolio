import { Pagination } from 'swiper';
import { SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Container } from './styles';

type SwiperProps = {
  slides: React.ReactNode[];
};

export function SwiperSkill({ slides }: SwiperProps) {
  if (!slides) {
    return null;
  }

  return (
    <Container
      pagination={{
        dynamicBullets: true,
      }}
      loop
      slidesPerView={1}
      breakpoints={{
        640: {
          slidesPerView: 2,
        },

        920: {
          slidesPerView: 3,
        },

        1280: {
          slidesPerView: 4,
        },

        1536: {
          slidesPerView: 5,
        },
      }}
      modules={[Pagination]}
    >
      {slides.map((slide, index) => {
        return <SwiperSlide key={index}>{slide}</SwiperSlide>;
      })}
    </Container>
  );
}
