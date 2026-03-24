"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimateOnScroll } from "@/src/components/animate-on-scroll";
import type { SkillCategory } from "@/src/data/skills";
import type { Dictionary } from "@/src/i18n/get-dictionary";
import { cf } from "@/src/lib/utils";

type TechStackProps = {
	categories: SkillCategory[];
	dictionary: Dictionary;
};

function SkillImage({
	src,
	alt,
	iconBg,
}: {
	src: string;
	alt: string;
	iconBg?: boolean;
}) {
	const [loaded, setLoaded] = useState(false);

	return (
		<span className={cf("", "rounded bg-neutral-800 p-1", !!iconBg)}>
			<Image
				src={src}
				alt={alt}
				width={20}
				height={20}
				className={cf("dark:invert-0 img-blur-load", "loaded", loaded)}
				onLoad={() => setLoaded(true)}
			/>
		</span>
	);
}

export function TechStack({ categories, dictionary }: TechStackProps) {
	return (
		<div className="mx-auto max-w-3xl space-y-10">
			{categories.map((category, i) => (
				<AnimateOnScroll key={category.key} animation="fade-up" delay={i * 100}>
					<div className="data-panel corner-brackets p-6">
						<div className="mb-5 flex items-center gap-3">
							<span className="text-neon-magenta font-sans text-xs">
								{">"}{" "}
							</span>
							<h3 className="font-display text-sm font-semibold tracking-wider uppercase gradient-text">
								{dictionary[category.key as keyof Dictionary]}
							</h3>
							<div className="h-px flex-1 bg-text-accent/15" />
						</div>
						<div className="flex flex-wrap gap-2.5">
							{category.skills.map((skill) => (
								<div
									key={skill.skill}
									className="skill-glow flex items-center gap-2 border border-text-accent/10 bg-bg-primary/40 px-3 py-2 transition-colors hover:border-text-accent/25 hover:bg-text-accent/5"
								>
									<SkillImage
										src={skill.imageUrl}
										alt={skill.skill}
										iconBg={skill.iconBg}
									/>
									<span className="font-sans text-xs text-text-primary">
										{skill.skill}
									</span>
								</div>
							))}
						</div>
					</div>
				</AnimateOnScroll>
			))}
		</div>
	);
}
