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

export const SwitchRoot = styled(Switch.Root)`
  width: 12rem;
  height: 4rem;
  border: none;
  border-radius: 9999rem;
  position: relative;
  background: ${({ theme }) => theme.colors.background.secondary};
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
`;
