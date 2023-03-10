import Link from 'next/link';
import styled from 'styled-components';

type Props = {
  size: number;
};

export const Container = styled(Link)<Props>`
  font-size: ${(props) => props.size}rem;
  font-weight: 900;
  text-decoration: none;
  background: ${(props) => props.theme.colors.gradient};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  span {
    background: ${(props) => props.theme.colors.text.quaternary};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
