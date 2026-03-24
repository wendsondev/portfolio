import Image from "next/image";

type SkillCardProps = {
	imageUrl: string;
	skill: string;
};

export function SkillCard({ imageUrl, skill }: SkillCardProps) {
	return (
		<div className="skill-glow flex h-20 w-20 shrink-0 flex-col items-center justify-center gap-2 rounded-xl bg-bg-secondary transition-transform hover:scale-105">
			<Image src={imageUrl} alt={skill} width={32} height={32} />
			<span className="text-[10px] font-medium text-text-primary text-center leading-tight">
				{skill}
			</span>
		</div>
	);
}
