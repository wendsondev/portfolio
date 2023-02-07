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
            <Link href="#about">About me</Link>
          </li>
          <li>
            <Link href="#skills">Skills</Link>
          </li>
          <li>
            <Link href="#projects">Projects</Link>
          </li>
          <li>
            <Link href="#contacts">Contacts</Link>
          </li>

          <ThemeSwitch showLabel={false} bg={colors.background.primary} />
        </ul>
      </Navbar>
    </Container>
  );
}
