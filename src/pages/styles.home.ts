import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;

  margin-top: 5rem;
  background: ${({ theme }) => theme.colors.background.primary};
`;

export const Welcome = styled.div`
  height: 80vh;
  display: flex;

  justify-content: space-around;
  align-items: center;

  div {
    max-width: 29rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    h1 {
      font-size: 4rem;
      font-weight: 900;

      background: ${(props) => props.theme.colors.gradient};
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;

      span {
        display: block;

        font-size: 2.5rem;
        font-weight: 700;

        background: ${(props) => props.theme.colors.text.primary};
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }

    p {
      font-size: 1.25rem;
      color: ${(props) => props.theme.colors.text.tertiary};
    }
  }

  aside {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const SubTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.quaternary};
`;

export const About = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  margin: 8rem 0;
  padding: 2rem 0;

  background: ${({ theme }) => theme.colors.background.secondary};

  span {
    font-size: 4rem;
    font-weight: 700;

    background: ${({ theme }) => theme.colors.gradient};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  P {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.text.secondary};
    max-width: 56.5rem;
  }
`;

export const Skills = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  margin: 8rem 0;
`;

export const Projects = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  margin: 8rem 0;
`;

export const SwiperContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  padding-top: 0.5rem;
  overflow: hidden;
  position: relative;

  border-top: 0.25rem solid ${({ theme }) => theme.colors.text.quaternary};
  border-radius: 0.5rem;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    z-index: 2;

    height: 10%;

    border-left: 0.25rem solid ${({ theme }) => theme.colors.text.quaternary};
    border-radius: 0 0 0.5rem 0.5rem;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2;

    height: 10%;

    border-left: 0.25rem solid ${({ theme }) => theme.colors.text.quaternary};
    border-radius: 0 0 0.5rem 0.5rem;
  }
`;

export const Contacts = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  margin: 8rem 0;

  > div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }

  @media screen and (max-width: ${({ theme }) => theme.sizes.md}) {
    > div {
      grid-template-columns: 1fr;
    }
  }
`;
