import Link, { LinkProps } from 'next/link';
import { IconType } from 'react-icons';
import { Container } from './styles';

type SocialLinkProps = LinkProps & {
  name?: string;
  target?: string;
  Icon: IconType;
  iconSize?: number;
};

export function SocialLink({
  name,
  Icon,
  iconSize = 42,
  ...res
}: SocialLinkProps) {
  return (
    <Link {...res} style={{ textDecoration: 'none' }}>
      <Container>
        <div>
          <Icon size={iconSize} />
        </div>
        <span>{name}</span>
      </Container>
    </Link>
  );
}
