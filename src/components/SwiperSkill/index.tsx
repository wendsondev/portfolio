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
        480: {
          slidesPerView: 2,
        },

        768: {
          slidesPerView: 3,
        },

        1024: {
          slidesPerView: 4,
        },

        1280: {
          slidesPerView: 5,
        },

        1536: {
          slidesPerView: 6,
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
