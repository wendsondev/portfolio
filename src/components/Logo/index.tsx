import { Container } from './styles';

export function Logo({
  size = 2,
  closed = false,
}: {
  size?: number;
  closed?: boolean;
}) {
  return (
    <Container size={size} href="/">
      <span>{closed ? '</' : '<'}</span>
      WS
      <span>{'>'}</span>
    </Container>
  );
}
