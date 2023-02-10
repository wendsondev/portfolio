import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;

  margin-top: 5rem;
  background: ${({ theme }) => theme.colors.background.primary};
`;

export const Title = styled.h1`
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

  @media screen and (max-width: ${({ theme }) => theme.sizes.md}) {
    font-size: 2.5rem;

    span {
      font-size: 1.75rem;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.sizes.sm}) {
    font-size: 2.25rem;

    span {
      font-size: 1.5rem;
    }
  }
`;

export const Welcome = styled.div`
  height: 80vh;
  display: flex;

  justify-content: space-around;
  align-items: center;
  padding: 0 1rem;

  div {
    max-width: 29rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

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

  @media screen and (max-width: ${(props) => props.theme.sizes.md}) {
    height: 50vh;

    aside {
      display: none;
    }

    > div {
      max-width: 80%;
      margin: 0 auto;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.sizes.sm}) {
    > div p {
      font-size: 1rem;
    }
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
  padding: 2rem;

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

  @media screen and (max-width: ${({ theme }) => theme.sizes.md}) {
    text-align: center;
    flex-direction: column;
    gap: 1rem;
    margin: 4rem 0;
  }
`;

export const Skills = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  margin: 8rem 0;

  @media screen and (max-width: ${({ theme }) => theme.sizes.md}) {
    margin: 4rem 0;
  }
`;

export const Projects = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  margin: 8rem 0;

  @media screen and (max-width: ${({ theme }) => theme.sizes.md}) {
    margin: 4rem 0;
  }
`;

export const SwiperContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  padding-top: 0.5rem;
  overflow: hidden;
  position: relative;

  @media screen and (max-width: ${({ theme }) => theme.sizes.md}) {
    width: 100%;
    padding: 0 1.5rem;
  }
`;

export const Contacts = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  margin: 8rem 0;
  padding: 0 1rem;

  > div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }

  @media screen and (max-width: ${({ theme }) => theme.sizes.md}) {
    padding: 0 2rem;
    margin: 4rem 0;

    > div {
      grid-template-columns: 1fr;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.sizes.sm}) {
    > div {
      width: 100%;
    }
  }
`;
