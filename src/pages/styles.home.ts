import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 2080px;
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

export const About = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
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

  h2 {
    font-size: 2rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.text.quaternary};
  }
`;

export const Projects = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  h2 {
    font-size: 2rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.text.quaternary};
  }
`;
