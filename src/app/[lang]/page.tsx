import { ChevronDown, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { AnimateOnScroll } from "@/src/components/animate-on-scroll";
import { ExperienceTimeline } from "@/src/components/experience-timeline";
import { SocialLink } from "@/src/components/social-link";
import { StatsBar } from "@/src/components/stats-bar";
import { TechStack } from "@/src/components/tech-stack";
import { Badge } from "@/src/components/ui/badge";
import { experiences } from "@/src/data/experience";
import { skillCategories } from "@/src/data/skills";
import type { Locale } from "@/src/i18n/config";
import { getDictionary } from "@/src/i18n/get-dictionary";

export default async function Home({
	params,
}: {
	params: Promise<{ lang: string }>;
}) {
	const { lang: rawLang } = await params;
	const lang = rawLang as Locale;
	const dict = await getDictionary(lang);

	return (
		<div>
			{/* Hero — Cinematic HUD */}
			<section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden text-center">
				{/* Grid background */}
				<div className="cyber-grid pointer-events-none absolute inset-0 -z-10" />

				{/* Neon gradient orbs */}
				<div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
					<div className="absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-neon-cyan/10 blur-[120px]" />
					<div className="absolute -bottom-32 right-1/4 h-80 w-80 rounded-full bg-neon-magenta/10 blur-[120px]" />
				</div>

				{/* Horizontal HUD lines */}
				<div className="pointer-events-none absolute top-1/4 left-0 w-full">
					<div className="hud-line" />
				</div>
				<div className="pointer-events-none absolute bottom-1/4 left-0 w-full">
					<div className="hud-line" />
				</div>

				<div className="mx-auto max-w-6xl px-6">
					{/* Status indicator */}
					<Badge variant="status" className="anim-stagger-0 mb-8 gap-3">
						<span className="animate-pulse-dot h-2 w-2 rounded-full bg-text-accent" />
						<span>[ {dict["hero-status"]} ]</span>
					</Badge>

					{/* Name with chromatic aberration */}
					<h1 className="anim-stagger-1 chromatic-text flicker text-7xl font-bold tracking-tight text-text-primary md:text-9xl">
						WENDSON SOUSA
					</h1>

					{/* Title */}
					<p className="anim-stagger-2 mt-4 font-sans text-lg font-medium tracking-[0.2em] uppercase text-text-accent neon-text-cyan md:text-xl">
						{">> "}
						{dict["hero-title"]}
						{" <<"}
					</p>

					{/* Subtitle */}
					<p className="anim-stagger-3 mx-auto mt-6 max-w-xl font-sans text-sm leading-relaxed text-text-secondary">
						{dict["hero-subtitle"]}
					</p>
				</div>

				{/* Scroll indicator */}
				<a
					href="#about"
					className="anim-stagger-4 mt-16 animate-bounce-down text-text-accent transition-colors hover:text-neon-magenta"
					aria-label="Scroll down"
				>
					<ChevronDown size={28} />
				</a>

				{/* Corner HUD decorations */}
				<div className="pointer-events-none absolute top-24 left-6 flex flex-col gap-1 font-sans text-[10px] tracking-widest text-text-accent/30">
					<span>SYS.ONLINE</span>
					<span>V2.0.26</span>
				</div>
				<div className="pointer-events-none absolute top-24 right-6 text-right font-sans text-[10px] tracking-widest text-text-accent/30">
					<span>PORTFOLIO.EXE</span>
				</div>
			</section>

			{/* Stats — HUD Data Panels */}
			<section className="mx-auto max-w-6xl px-6 py-16">
				<AnimateOnScroll>
					<StatsBar dictionary={dict} />
				</AnimateOnScroll>
			</section>

			{/* About — Terminal Style */}
			<section id="about" className="section-alt scroll-mt-24 py-24 md:py-32">
				<div className="mx-auto max-w-6xl px-6">
					<AnimateOnScroll>
						<div className="mx-auto max-w-2xl">
							<div className="corner-brackets data-panel p-8 md:p-10">
								<div className="mb-6 flex items-center gap-3 font-sans text-xs tracking-widest uppercase text-text-accent">
									<span className="neon-text-cyan">{">"}</span>
									<span>{dict["header-about"]}</span>
									<div className="h-px flex-1 bg-text-accent/20" />
								</div>
								<p className="mb-2 font-sans text-xs text-text-tertiary">
									{`//`} {dict["about-subtitle"]}
								</p>
								<div className="space-y-4 font-sans text-sm leading-relaxed text-text-secondary">
									<p>{dict["about-p1"]}</p>
									<p>{dict["about-p2"]}</p>
									<p>{dict["about-p3"]}</p>
								</div>
								<div className="mt-6 h-px bg-linear-to-r from-text-accent/40 via-neon-magenta/20 to-transparent" />
							</div>
						</div>
					</AnimateOnScroll>
				</div>
			</section>

			{/* Experience */}
			<section id="experience" className="scroll-mt-24 py-24 md:py-32">
				<div className="mx-auto max-w-6xl px-6">
					<AnimateOnScroll>
						<div className="mb-12 text-center">
							<h2 className="mb-2 text-4xl font-bold text-text-primary neon-text-cyan md:text-5xl">
								[ {dict.experience} ]
							</h2>
							<p className="font-sans text-sm text-text-tertiary">
								{dict["experience-subtitle"]}
							</p>
						</div>
					</AnimateOnScroll>
					<div className="mx-auto max-w-2xl">
						<ExperienceTimeline experiences={experiences} dictionary={dict} />
					</div>
				</div>
			</section>

			{/* Tech Stack */}
			<section id="skills" className="section-alt scroll-mt-24 py-24 md:py-32">
				<div className="mx-auto max-w-6xl px-6">
					<AnimateOnScroll>
						<div className="mb-12 text-center">
							<h2 className="mb-2 text-4xl font-bold text-text-primary neon-text-cyan md:text-5xl">
								[ {dict.skills} ]
							</h2>
							<p className="font-sans text-sm text-text-tertiary">
								{dict["skills-subtitle"]}
							</p>
						</div>
					</AnimateOnScroll>
					<TechStack categories={skillCategories} dictionary={dict} />
				</div>
			</section>

			{/* Contacts */}
			<section id="contacts" className="scroll-mt-24 py-24 md:py-32">
				<div className="mx-auto max-w-6xl px-6">
					<AnimateOnScroll>
						<div className="mx-auto max-w-xl text-center">
							<h2 className="mb-3 text-4xl font-bold text-text-primary neon-text-cyan md:text-5xl">
								[ {dict.contacts} ]
							</h2>
							<p className="mb-4 font-sans text-sm text-text-tertiary">
								{dict["contacts-subtitle"]}
							</p>
							<p className="mb-10 font-sans text-sm text-text-secondary">
								{dict["contacts-cta"]}
							</p>

							{/* CTA button */}
							<a
								href="mailto:contact@wendson.dev"
								className="glitch-hover neon-border mb-10 inline-flex items-center gap-3 bg-text-accent/10 px-8 py-3 font-sans text-sm font-semibold tracking-widest uppercase text-text-accent transition-all hover:bg-text-accent/20 focus-visible:ring-2 focus-visible:ring-ring/50"
							>
								<Mail size={18} />
								{dict["contacts-subtitle"]}
							</a>

							{/* Social links */}
							<div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
								<SocialLink
									href="https://github.com/wendsondev"
									name="GitHub"
									icon={<Github size={20} />}
								/>
								<SocialLink
									href="https://www.linkedin.com/in/wendsondev/"
									name="LinkedIn"
									icon={<Linkedin size={20} />}
								/>
								<SocialLink
									href="https://twitter.com/wendsondev/"
									name="Twitter"
									icon={<Twitter size={20} />}
								/>
							</div>
						</div>
					</AnimateOnScroll>
				</div>
			</section>
		</div>
	);
}
