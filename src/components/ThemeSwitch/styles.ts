import * as Switch from '@radix-ui/react-switch';
import styled from 'styled-components';

export const Label = styled.label`
  font-size: 1.75rem;
  font-weight: 700;
  text-align: center;
  text-transform: capitalize;
  margin-bottom: 0.75rem;
  color: ${({ theme }) => theme.colors.text.primary};
`;

type SwitchRootProps = {
  background?: string;
};

export const SwitchRoot = styled(Switch.Root)<SwitchRootProps>`
  width: 12rem;
  height: 4rem;
  cursor: pointer;
  border: none;
  border-radius: 9999rem;
  position: relative;
  background: ${({ theme, background }) =>
    background || theme.colors.background.secondary};

  @media screen and (max-width: ${({ theme }) => theme.sizes.md}) {
    width: 10rem;
    height: 2.5rem;
  }
`;

export const SwitchThumb = styled(Switch.Thumb)`
  width: 3.5rem;
  height: 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.text.primary};
  border-radius: 9999px;
  transition: transform 150ms;
  transform: translateX(0.25rem) rotate(0deg);

  &[data-state='checked'] {
    transform: translateX(8.25rem) rotate(360deg);
  }

  @media screen and (max-width: ${({ theme }) => theme.sizes.md}) {
    width: 2rem;
    height: 2rem;

    &[data-state='checked'] {
      transform: translateX(7.5rem) rotate(360deg);
    }
  }
`;
