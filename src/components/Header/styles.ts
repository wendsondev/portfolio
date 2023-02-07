import LinkPrimitive from 'next/link';
import styled from 'styled-components';

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  width: 100%;
  height: 5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 2rem;
  background: ${({ theme }) => theme.colors.background.secondary};

  @media screen and (min-width: ${({ theme }) => theme.sizes.md}) {
    padding: 0 4rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.sizes.lg}) {
    padding: 0 7.5rem;
  }
`;

type NavbarProps = {
  menuMobileIsOpen: boolean;
};

export const Navbar = styled.nav<NavbarProps>`
  ul {
    display: flex;
    align-items: center;
    gap: 4rem;
    overflow: hidden;
    list-style: none;

    transition: 150ms;

    > div {
      display: none;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.sizes.md}) {
    ul {
      position: fixed;
      top: 5rem;
      right: 0;
      z-index: 10;

      width: ${({ menuMobileIsOpen }) => (menuMobileIsOpen ? '100%' : '0')};
      height: 100vh;

      flex-direction: column;
      justify-content: center;

      background: ${({ theme }) => theme.colors.background.secondary};

      li {
        &:first-child {
          margin-top: -5rem;
        }
      }

      > div {
        display: block;
      }
    }
  }
`;

export const Link = styled(LinkPrimitive)`
  color: ${(props) => props.theme.colors.text.primary};
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

export const MobileMenu = styled.button`
  display: none;
  cursor: pointer;
  border: none;
  background: transparent;

  &:hover svg {
    color: ${({ theme }) => theme.colors.text.quaternary};
  }

  svg {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.text.secondary};
  }

  @media screen and (max-width: ${({ theme }) => theme.sizes.md}) {
    display: flex;
  }
`;
