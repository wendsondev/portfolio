import LinkPrimitive from 'next/link';
import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  background: ${({ theme }) => theme.colors.background.secondary};

  @media screen and (max-width: ${({ theme }) => theme.sizes.lg}) {
    text-align: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
  }
`;

export const Navbar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-end;

  ul {
    display: flex;
    align-items: center;
    gap: 2rem;
    overflow: hidden;
    list-style: none;

    transition: 150ms;
  }

  @media screen and (max-width: ${({ theme }) => theme.sizes.lg}) {
    align-items: center;
  }

  @media screen and (max-width: ${({ theme }) => theme.sizes.md}) {
    display: none;
  }
`;

export const Link = styled(LinkPrimitive)`
  color: ${({ theme }) => theme.colors.text.primary};
  text-decoration: none;
  font-size: 1.25rem;
  font-weight: 700;

  &:hover {
    color: ${(props) => props.theme.colors.text.quaternary};
    transition: color 150ms;
  }

  @media screen and (max-width: ${({ theme }) => theme.sizes.md}) {
    font-size: 1.75rem;
  }
`;

export const SocialLinkContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const SocialLink = styled(LinkPrimitive)`
  width: 3.5rem;
  height: 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 999rem;
  border: 0.2rem solid ${({ theme }) => theme.colors.text.quaternary};
  transition: 150ms;

  > svg {
    color: ${({ theme }) => theme.colors.text.primary};
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.text.primary};
  }
`;
