import { Container } from './styles';

export function Logo({ size = 2 }: { size?: number }) {
  return (
    <Container size={size} href="/">
      <span>{'<'}</span>
      WS
      <span>{'>'}</span>
    </Container>
  );
}
