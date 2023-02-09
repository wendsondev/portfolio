import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { MdClose, MdMenu } from 'react-icons/md';
import { useTheme } from 'styled-components';
import { Logo } from '../Logo';
import { ThemeSwitch } from '../ThemeSwitch';
import { Container, Link, MobileMenu, Navbar } from './styles';

export function Header() {
  const [menuMobileIsOpen, setMenuMobileIsOpen] = useState(false);
  const { colors } = useTheme();
  const { asPath } = useRouter();
  const { t } = useTranslation('common');

  useEffect(() => {
    if (menuMobileIsOpen) {
      setMenuMobileIsOpen(false);
    }
  }, [asPath]);

  return (
    <Container>
      <Logo />

      <Navbar menuMobileIsOpen={menuMobileIsOpen}>
        <MobileMenu onClick={() => setMenuMobileIsOpen((state) => !state)}>
          {menuMobileIsOpen ? <MdClose /> : <MdMenu />}
        </MobileMenu>
        <ul>
          <li>
            <Link href="#about">{t('header-about')}</Link>
          </li>
          <li>
            <Link href="#skills">{t('header-skills')}</Link>
          </li>
          <li>
            <Link href="#projects">{t('header-projects')}</Link>
          </li>
          <li>
            <Link href="#contacts">{t('header-contacts')}</Link>
          </li>

          <ThemeSwitch showLabel={false} bg={colors.background.primary} />
        </ul>
      </Navbar>
    </Container>
  );
}
