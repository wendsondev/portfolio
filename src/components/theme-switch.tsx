"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/src/components/ui/button";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/src/components/ui/tooltip";

export function ThemeSwitch() {
	const { resolvedTheme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => setMounted(true), []);

	if (!mounted) {
		return (
			<div className="h-8 w-8 border border-text-accent/20 bg-bg-secondary" />
		);
	}

	const isDark = resolvedTheme === "dark";
	const label = isDark ? "Switch to light theme" : "Switch to dark theme";

	return (
		<Tooltip>
			<TooltipTrigger
				render={
					<Button
						variant="ghost-cyber"
						size="icon"
						onClick={() => setTheme(isDark ? "light" : "dark")}
						aria-label={label}
					/>
				}
			>
				{isDark ? (
					<Moon
						size={14}
						className="text-text-accent transition-transform duration-300 group-hover/button:rotate-12"
					/>
				) : (
					<Sun
						size={14}
						className="text-text-accent transition-transform duration-300 group-hover/button:rotate-45"
					/>
				)}
			</TooltipTrigger>
			<TooltipContent>{label}</TooltipContent>
		</Tooltip>
	);
}
