import useTranslation from 'next-translate/useTranslation';
import { RiLinkedinFill } from 'react-icons/ri';
import { VscGithubAlt } from 'react-icons/vsc';
import { Logo } from '../Logo';
import { Container, Credit, SocialLink, SocialLinkContainer } from './styles';

export function Footer() {
  const { t } = useTranslation('common');

  return (
    <Container>
      <Logo size={3} closed />

      <Credit>
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

        <small>{t('copyright')}</small>
      </Credit>
    </Container>
  );
}
