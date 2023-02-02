import { Autoplay, Pagination } from 'swiper';
import { SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Container } from './styles';

type SwiperProps = {
  slides: React.ReactNode[];
};

export function SwiperProject({ slides }: SwiperProps) {
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
      autoplay={{
        delay: 8000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        680: {
          slidesPerView: 2,
        },

        1024: {
          slidesPerView: 3,
        },

        1440: {
          slidesPerView: 4,
        },
      }}
      modules={[Pagination, Autoplay]}
    >
      {slides.map((slide, index) => {
        return <SwiperSlide key={index}>{slide}</SwiperSlide>;
      })}
    </Container>
  );
}
