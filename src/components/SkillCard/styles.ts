import styled from 'styled-components';

export const Container = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  border-radius: 0.5rem;
  padding: 2rem;
  background: ${(props) => props.theme.colors.background.secondary};

  img {
    width: 100%;
    object-fit: contain;
  }

  span {
    text-align: center;
    font-size: 1.5rem;
    color: ${(props) => props.theme.colors.text.primary};
  }

  @media screen and (max-width: ${(props) => props.theme.sizes.sm}) {
    span {
      font-size: 1.25rem;
    }
  }
`;
