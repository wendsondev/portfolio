import styled from 'styled-components';
import { Swiper as SwiperPrimitive } from 'swiper/react';

export const Container = styled(SwiperPrimitive)`
  width: 100%;
  padding-bottom: 3rem;

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-pagination-bullet {
    background-color: ${(props) => props.theme.colors.text.primary};
  }
`;
