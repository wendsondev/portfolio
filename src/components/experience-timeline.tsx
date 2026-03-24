"use client";

import { AnimateOnScroll } from "@/src/components/animate-on-scroll";
import { Badge } from "@/src/components/ui/badge";
import type { Experience } from "@/src/data/experience";
import type { Dictionary } from "@/src/i18n/get-dictionary";

type ExperienceTimelineProps = {
	experiences: Experience[];
	dictionary: Dictionary;
};

export function ExperienceTimeline({
	experiences,
	dictionary,
}: ExperienceTimelineProps) {
	return (
		<div className="relative ml-4 space-y-4 border-l border-text-accent/30 pl-10">
			{experiences.map((exp, i) => {
				const role = dictionary[exp.roleKey as keyof Dictionary];
				const period = dictionary[exp.periodKey as keyof Dictionary];
				const description = dictionary[exp.descriptionKey as keyof Dictionary];
				const highlights = dictionary[exp.highlightsKey as keyof Dictionary];

				return (
					<AnimateOnScroll
						key={exp.roleKey}
						animation="fade-left"
						delay={i * 150}
					>
						<div className="relative">
							{/* Timeline node — neon dot, centered on the border line */}
							<div className="absolute -left-11.5 top-1 h-3 w-3 -translate-x-px border border-text-accent bg-bg-primary shadow-[0_0_8px_var(--text-accent)]" />

							{/* Data panel card */}
							<div className="data-panel corner-brackets p-5">
								<div className="mb-2 flex items-center gap-2 font-sans text-xs text-text-tertiary">
									<span className="text-text-accent">{`//`}</span>
									<span className="tracking-wider uppercase">{period}</span>
									<span className="text-text-accent/40">|</span>
									<span className="text-text-accent">{exp.company}</span>
								</div>

								<h3 className="mb-3 text-xl font-bold text-text-primary">
									{role}
								</h3>

								<p className="mb-4 font-sans text-sm leading-relaxed text-text-secondary">
									{description}
								</p>

								{highlights && (
									<div className="mb-4 flex flex-wrap gap-2">
										{String(highlights)
											.split(", ")
											.map((h) => (
												<Badge key={h} variant="highlight">
													{h}
												</Badge>
											))}
									</div>
								)}

								<div className="flex flex-wrap gap-1.5">
									{exp.techs.map((tech) => (
										<Badge key={tech} variant="tech">
											{tech}
										</Badge>
									))}
								</div>
							</div>
						</div>
					</AnimateOnScroll>
				);
			})}
		</div>
	);
}
