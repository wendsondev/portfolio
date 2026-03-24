"use client";

import { Menu } from "lucide-react";
import { useState } from "react";
import { useActiveSection } from "@/src/hooks/use-active-section";
import type { Locale } from "@/src/i18n/config";
import type { Dictionary } from "@/src/i18n/get-dictionary";
import { cn, cv } from "@/src/lib/utils";
import { Logo } from "./logo";
import { ThemeSwitch } from "./theme-switch";
import { Button } from "./ui/button";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "./ui/sheet";

type HeaderProps = {
	dictionary: Dictionary;
	lang: Locale;
};

const navItems = [
	{ key: "header-about" as const, href: "#about", section: "about" },
	{
		key: "header-experience" as const,
		href: "#experience",
		section: "experience",
	},
	{ key: "header-skills" as const, href: "#skills", section: "skills" },
	{ key: "header-contacts" as const, href: "#contacts", section: "contacts" },
];

export function Header({ dictionary, lang }: HeaderProps) {
	const [isOpen, setIsOpen] = useState(false);
	const activeSection = useActiveSection();

	return (
		<header className="fixed top-0 z-10 w-full border-b border-text-accent/10 bg-bg-primary/80 backdrop-blur-md">
			<div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
				<Logo lang={lang} />

				<nav
					className="hidden items-center gap-8 md:flex"
					aria-label="Main navigation"
				>
					{navItems.map((item) => {
						const isActive = activeSection === item.section;
						return (
							<a
								key={item.key}
								href={item.href}
								aria-current={isActive ? "true" : undefined}
								className={cn(
									"nav-link font-sans transition-colors",
									cv(
										String(isActive),
										{
											true: "text-text-accent neon-text-cyan",
											false: "text-text-tertiary hover:text-text-accent",
										},
										"text-text-tertiary hover:text-text-accent",
									),
								)}
							>
								{dictionary[item.key]}
							</a>
						);
					})}
					<div className="h-4 w-px bg-text-accent/20" />
					<ThemeSwitch />
				</nav>

				<Sheet open={isOpen} onOpenChange={setIsOpen}>
					<SheetTrigger
						render={
							<Button
								variant="ghost-cyber"
								size="icon"
								className="md:hidden"
								aria-label="Open menu"
							/>
						}
					>
						<Menu size={24} />
					</SheetTrigger>
					<SheetContent side="right" className="w-72 pt-12">
						<SheetHeader>
							<SheetTitle>
								{">"} {dictionary["header-about"]}
							</SheetTitle>
						</SheetHeader>
						<nav
							className="flex flex-col gap-4 px-4 pb-6"
							aria-label="Mobile navigation"
						>
							{navItems.map((item) => {
								const isActive = activeSection === item.section;
								return (
									// biome-ignore lint/a11y/useAnchorContent: content is provided as children
									<SheetClose key={item.key} render={<a href={item.href} />}>
										<span
											className={cn(
												"font-sans text-xs tracking-widest uppercase transition-colors",
												cv(
													String(isActive),
													{
														true: "text-text-accent neon-text-cyan",
														false: "text-text-tertiary hover:text-text-accent",
													},
													"text-text-tertiary hover:text-text-accent",
												),
											)}
										>
											{"// "}
											{dictionary[item.key]}
										</span>
									</SheetClose>
								);
							})}
							<div className="h-px bg-text-accent/20" />
							<ThemeSwitch />
						</nav>
					</SheetContent>
				</Sheet>
			</div>
		</header>
	);
}
