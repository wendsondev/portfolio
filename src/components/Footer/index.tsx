import { useRouter } from 'next/router';
import { RiLinkedinFill } from 'react-icons/ri';
import { VscGithubAlt } from 'react-icons/vsc';
import { Logo } from '../Logo';
import {
  Container,
  Link,
  Navbar,
  SocialLink,
  SocialLinkContainer,
} from './styles';

export function Footer() {
  const { asPath } = useRouter();

  return (
    <Container id="contacts">
      <Logo size={3.5} />

      <Navbar>
        <ul>
          <li>
            <Link path={asPath} href="#about">
              About me
            </Link>
          </li>
          <li>
            <Link path={asPath} href="#skills">
              Skills
            </Link>
          </li>
          <li>
            <Link path={asPath} href="#projects">
              Projects
            </Link>
          </li>
          <li>
            <Link path={asPath} href="#contacts">
              Contacts
            </Link>
          </li>
        </ul>

        <SocialLinkContainer>
          <SocialLink
            title="github"
            href="https://github.com/wendsondev"
            target="_blank"
          >
            <VscGithubAlt size={36} />
          </SocialLink>

          <SocialLink
            title="linkedin"
            href="https://www.linkedin.com/in/wendsondev/"
            target="_blank"
          >
            <RiLinkedinFill size={32} />
          </SocialLink>
        </SocialLinkContainer>
      </Navbar>
    </Container>
  );
}
