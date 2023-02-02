import LinkPrimitive from 'next/link';
import styled from 'styled-components';

export const Container = styled.article`
  position: relative;

  width: 20rem;
  height: 20rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  text-align: center;
  overflow: hidden;
  padding: 2rem;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors.background.secondary};

  img {
    position: absolute;
    top: 0;
    left: 0;
    transition: 150ms;
  }

  &:hover {
    opacity: 98%;

    img {
      opacity: 5%;
      z-index: -1;
    }
  }
`;

export const Title = styled.strong`
  font-size: 2rem;
  font-weight: 700;
  cursor: default;
  color: ${({ theme }) => theme.colors.text.quaternary};
`;

export const Languages = styled.span`
  font-weight: 700;
  cursor: default;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const Description = styled.p`
  cursor: default;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const BoxLinks = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

export const Link = styled(LinkPrimitive)`
  display: flex;
  justify-content: center;
  flex: 1;
  gap: 0.5rem;
  padding: 0.5rem;
  border-radius: 0.5rem;

  font-size: 1.25rem;
  text-decoration: none;

  border: 2px solid ${({ theme }) => theme.colors.background.primary};
  color: ${({ theme }) => theme.colors.text.primary};
  background: ${({ theme }) => theme.colors.background.primary};
  transition: 150ms;

  &:hover {
    background: transparent;
    border-color: ${({ theme }) => theme.colors.text.primary};
  }
`;
