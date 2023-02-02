import Image from 'next/image';
import {
  BoxLinks,
  Container,
  Description,
  Languages,
  Link,
  Title,
} from './styles';

type ProjectCardProps = {
  title: string;
  description: string;
  languages: string[];
  github: string;
  preview: string;
};

export function ProjectCard({
  title,
  description,
  languages,
  github,
  preview,
}: ProjectCardProps) {
  return (
    <Container>
      <Image fill src={'https://github.com/wendson13.png'} alt={title} />

      <Title>{title}</Title>
      <Languages>{languages.join(', ')}</Languages>
      <Description>{description}</Description>

      <BoxLinks>
        <Link href={github}>Github</Link>
        <Link href={preview}>Preview</Link>
      </BoxLinks>
    </Container>
  );
}
