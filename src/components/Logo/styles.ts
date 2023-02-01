import Link from 'next/link';
import styled from 'styled-components';

export const Container = styled(Link)`
  font-size: 2rem;
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
