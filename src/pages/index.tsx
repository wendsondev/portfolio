import { SocialLink } from '@components/SocialLink';
import { SwiperProject } from '@components/SwiperProject';
import { SwiperSkill } from '@components/SwiperSkill';
import { ThemeSwitch } from '@components/ThemeSwitch';
import { RiLinkedinFill } from 'react-icons/ri';
import { VscGithubAlt, VscMail, VscTwitter } from 'react-icons/vsc';
import {
  About,
  Contacts,
  Container,
  Projects,
  Skills,
  SubTitle,
  SwiperContainer,
  Welcome,
} from './styles.home';

export default function Home() {
  const fakeSkills = Array.from({ length: 15 }).map((_, i) => {
    return (
      <SkillCard
        key={i}
        imageUrl="https://github.com/wendson13.png"
        skill={`Typescript ${i + 1}`}
      />
    );
  });

  const fakeProjects = Array.from({ length: 15 }).map((_, i) => {
    return (
      <ProjectCard
        key={i}
        title={`Landing Page ${i + 1}`}
        description="this is landing page description"
        languages={['HTML', 'CSS', 'JavaScript']}
        github="github.com/wendson13/landing-page"
        preview="https://example.com"
      />
    );
  });

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

      <div id="about">
        <About>
          <span>WS</span>

          <p>{`About a year now, I've been building web applications mainly using React JS with typescript. I'm Currently studying Computer Science at UniFavip Wyden.`}</p>
        </About>
      </div>

      <div id="skills">
        <Skills>
          <h2>My Skills</h2>

          <SwiperContainer>
            <SwiperSkill slides={fakeSkills} />
          </SwiperContainer>
        </Skills>
      </div>

      <div id="projects">
        <Projects>
          <h2>My Projects</h2>

          <SwiperContainer>
            <SwiperProject slides={fakeProjects} />
          </SwiperContainer>
        </Projects>
      </div>

      <div id="contacts">
        <Contacts>
          <SubTitle>My Contacts</SubTitle>

          <div>
            <SocialLink
              Icon={VscGithubAlt}
              target="_blank"
              name="wendsondev"
              href="https://github.com/wendsondev"
            />
            <SocialLink
              Icon={RiLinkedinFill}
              target="_blank"
              name="wendsondev"
              href="https://www.linkedin.com/in/wendsondev/"
            />

            <SocialLink
              Icon={VscMail}
              target="_blank"
              name="wendson.dev@gmail.com"
              href="mailto:wendson.dev@gmail.com"
            />

            <SocialLink
              Icon={VscTwitter}
              target="_blank"
              name="wendsondev"
              href="https://twitter.com/wendsondev/"
            />
          </div>
        </Contacts>
      </div>
    </Container>
  );
}
