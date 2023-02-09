import { ProjectCardProps } from '@components/ProjectCard';
import { SocialLink } from '@components/SocialLink';
import { SwiperProject } from '@components/SwiperProject';
import { SwiperSkill } from '@components/SwiperSkill';
import { ThemeSwitch } from '@components/ThemeSwitch';
import { api } from '@services/axios';
import { skills } from '@utils/skills';
import { GetStaticProps } from 'next';
import useTranslation from 'next-translate/useTranslation';
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
  Title,
  Welcome,
} from './styles.home';

type Props = {
  projects: ProjectCardProps[];
};

export default function Home({ projects }: Props) {
  const { t } = useTranslation('common');

  return (
    <Container>
      <Welcome>
        <div>
          <Title>
            Wendson Sousa <span>Front-End Developer</span>
          </Title>
          <p>{t('welcome')}</p>
        </div>

        <aside>
          <ThemeSwitch />
        </aside>
      </Welcome>

      <div id="about">
        <About>
          <span>WS</span>

          <p>{t('about')}</p>
        </About>
      </div>

      <div id="skills">
        <Skills>
          <SubTitle>{t('skills')}</SubTitle>

          <SwiperContainer>
            <SwiperSkill slides={skills} />
          </SwiperContainer>
        </Skills>
      </div>

      <div id="projects">
        <Projects>
          <SubTitle>{t('projects')}</SubTitle>

          <SwiperContainer>
            <SwiperProject slides={projects} />
          </SwiperContainer>
        </Projects>
      </div>

      <div id="contacts">
        <Contacts>
          <SubTitle>{t('contacts')}</SubTitle>

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

type Project = {
  name: string;
  full_name: string;
  description: string;
  homepage: string;
  html_url: string;
  topics: string[];
};

type ProjectsData = {
  items: Project[];
};

export const getStaticProps: GetStaticProps = async () => {
  const { data: dataProjects } = await api.get<ProjectsData>(
    process.env.NEXT_PROJECTS_URL
  );

  const projects = dataProjects.items.map((project) => {
    return {
      imageUrl:
        process.env.NEXT_CONTENT_URL +
        project.full_name +
        process.env.NEXT_COVER_URL,

      title: project.name.replace('-', ' '),
      description: project.description,
      github: project.html_url,
      languages: project.topics
        .filter((topic) => topic !== 'wendsondev')
        .slice(0, 3),

      preview: project.homepage,
    };
  });

  return {
    props: {
      projects,
    },
    revalidate: 60 * 60 * 24, // 24h
  };
};
