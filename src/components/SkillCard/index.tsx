import Image from 'next/image';
import { Container } from './styles';

export type SkillCardProps = {
  imageUrl: string;
  skill: string;
};

export function SkillCard({ imageUrl, skill }: SkillCardProps) {
  return (
    <Container>
      <Image src={imageUrl} alt={skill} width={160} height={160} />
      <span>{skill}</span>
    </Container>
  );
}
