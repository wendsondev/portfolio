import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  transition: 150ms;
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;

  border: 0.2rem solid ${(props) => props.theme.colors.background.secondary};
  color: ${({ theme }) => theme.colors.text.secondary};
  background-color: ${({ theme }) => theme.colors.background.secondary};

  &:hover {
    border-color: ${({ theme }) => theme.colors.text.secondary};
    background: transparent;

    div {
      border-color: ${({ theme }) => theme.colors.text.primary};
    }
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    border-radius: 999rem;
    border: 0.2rem solid ${({ theme }) => theme.colors.text.quaternary};
    transition: 150ms;
  }

  span {
    font-size: 1.5rem;
    font-weight: 700;
  }

  @media screen and (max-width: ${(props) => props.theme.sizes.sm}) {
    justify-content: center;

    span {
      display: none;
    }
  }
`;
