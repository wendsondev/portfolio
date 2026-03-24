import type { ReactNode } from "react";

type SocialLinkProps = {
	href: string;
	name: string;
	icon: ReactNode;
	target?: string;
};

export function SocialLink({
	href,
	name,
	icon,
	target = "_blank",
}: SocialLinkProps) {
	return (
		<a
			href={href}
			target={target}
			className="group glitch-hover flex items-center gap-3 border border-text-accent/15 bg-bg-secondary/60 px-5 py-4 transition-all hover:border-text-accent hover:shadow-[0_0_16px_color-mix(in_srgb,var(--text-accent)_15%,transparent)]"
		>
			<span className="flex h-10 w-10 items-center justify-center border border-text-accent/20 text-text-accent transition-all group-hover:border-text-accent group-hover:shadow-[0_0_8px_var(--text-accent)]">
				{icon}
			</span>
			<span className="font-sans text-xs font-medium tracking-wider uppercase text-text-secondary transition-colors group-hover:text-text-accent">
				{name}
			</span>
		</a>
	);
}
