import { Autoplay, Pagination } from 'swiper';
import { SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { SkillCard, SkillCardProps } from '../SkillCard';
import { Container } from './styles';

type SwiperProps = {
  slides: SkillCardProps[];
};

export function SwiperSkill({ slides }: SwiperProps) {
  return (
    <Container
      pagination={{
        dynamicBullets: true,
      }}
      loop
      slidesPerView={1}
      spaceBetween={16}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        500: {
          slidesPerView: 2,
        },

        850: {
          slidesPerView: 3,
        },

        1280: {
          slidesPerView: 4,
        },

        1536: {
          slidesPerView: 5,
        },
      }}
      modules={[Pagination, Autoplay]}
    >
      {slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <SkillCard
              key={slide.skill + index}
              imageUrl={slide.imageUrl}
              skill={slide.skill}
            />
          </SwiperSlide>
        );
      })}
    </Container>
  );
}
