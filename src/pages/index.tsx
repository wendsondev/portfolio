import { ThemeSwitch } from '@/components/ThemeSwitch';
import { About, Container, Projects, Skills, Welcome } from './styles.home';

export default function Home() {
  return (
    <Container>
      <Welcome>
        <div>
          <h1>
            Wendson Sousa <span>Front-End Developer</span>
          </h1>
          <p>Specialized in creating modern websites and web applications.</p>
        </div>

        <aside>
          <ThemeSwitch />
        </aside>
      </Welcome>

      <About id="about">
        <span>WS</span>

        <p>{`About a year now, I've been building web applications mainly using React JS with typescript. I'm Currently studying Computer Science at UniFavip Wyden.`}</p>
      </About>

      <Skills id="skills">
        <h2>My Skills</h2>
      </Skills>

      <Projects id="contacts">
        <h2>My Projects</h2>
      </Projects>
    </Container>
  );
}
