import { Autoplay, Pagination } from 'swiper';
import { SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { ProjectCard, ProjectCardProps } from '../ProjectCard';
import { Container } from './styles';

type SwiperProps = {
  slides: ProjectCardProps[];
};

export function SwiperProject({ slides }: SwiperProps) {
  return (
    <Container
      pagination={{
        dynamicBullets: true,
      }}
      loop
      slidesPerView={1}
      spaceBetween={16}
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
          spaceBetween: 16,
        },
      }}
      modules={[Pagination, Autoplay]}
    >
      {slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <ProjectCard
              key={index}
              title={slide.title}
              description={slide.description}
              languages={slide.languages}
              github={slide.github}
              preview={slide.preview}
            />
          </SwiperSlide>
        );
      })}
    </Container>
  );
}
