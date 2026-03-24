import { Github, Linkedin } from "lucide-react";
import type { Dictionary } from "@/src/i18n/get-dictionary";
import { Logo } from "./logo";
import { SocialLink } from "./social-link";

type FooterProps = {
	dictionary: Dictionary;
};

export function Footer({ dictionary }: FooterProps) {
	return (
		<footer className="mt-20 border-t border-text-accent/10 bg-bg-secondary py-10">
			<div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6">
				<Logo closed />

				<div className="flex gap-4">
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
				</div>

				<div className="hud-line w-48" />

				<p className="text-center font-sans text-xs tracking-wider text-text-tertiary">
					{dictionary.copyright}
				</p>
			</div>
		</footer>
	);
}
