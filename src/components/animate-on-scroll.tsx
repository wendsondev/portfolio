"use client";

import type { ReactNode } from "react";
import { useInView } from "@/src/hooks/use-in-view";
import { cn, cv } from "@/src/lib/utils";

type Animation = "fade-up" | "fade-left" | "fade-right" | "scale-in";

type AnimateOnScrollProps = {
	children: ReactNode;
	animation?: Animation;
	delay?: number;
	className?: string;
};

const animationClasses: Record<Animation, { base: string; active: string }> = {
	"fade-up": {
		base: "translate-y-10 opacity-0",
		active: "translate-y-0 opacity-100",
	},
	"fade-left": {
		base: "-translate-x-10 opacity-0",
		active: "translate-x-0 opacity-100",
	},
	"fade-right": {
		base: "translate-x-10 opacity-0",
		active: "translate-x-0 opacity-100",
	},
	"scale-in": {
		base: "scale-95 opacity-0",
		active: "scale-100 opacity-100",
	},
};

export function AnimateOnScroll({
	children,
	animation = "fade-up",
	delay = 0,
	className = "",
}: AnimateOnScrollProps) {
	const { ref, isInView } = useInView({
		threshold: 0.1,
		rootMargin: "0px 0px -40px 0px",
	});
	const { base, active } = animationClasses[animation];

	return (
		<div
			ref={ref}
			className={cn(
				"transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
				cv(String(isInView), { true: active, false: base }, base),
				className,
			)}
			style={{ transitionDelay: `${delay}ms` }}
		>
			{children}
		</div>
	);
}
