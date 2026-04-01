"use client";

import { Brain, Calendar, Cloud, Layers } from "lucide-react";
import { ProgressiveCount } from "@/src/components/progressive-count";
import { useInView } from "@/src/hooks/use-in-view";
import type { Dictionary } from "@/src/i18n/get-dictionary";
import { cf } from "@/src/lib/utils";

type StatsBarProps = {
	dictionary: Dictionary;
};

const stats = [
	{ valueKey: "stats-years", labelKey: "stats-years-label", icon: Calendar },
	{ valueKey: "stats-stack", labelKey: "stats-stack-label", icon: Layers },
	{ valueKey: "stats-cloud", labelKey: "stats-cloud-label", icon: Cloud },
	{ valueKey: "stats-ai", labelKey: "stats-ai-label", icon: Brain },
] as const;

function StatValue({ value, isInView }: { value: string; isInView: boolean }) {
	const numericMatch = value.match(/^(\d+)(\+?\s*.*)$/);

	if (!numericMatch) {
		return (
			<span
				className={cf(
					"transition-opacity duration-700 opacity-0",
					"opacity-100",
					isInView,
				)}
			>
				{value}
			</span>
		);
	}

	const target = Number.parseInt(numericMatch[1], 10);
	const suffix = numericMatch[2];

	return (
		<span>
			{isInView ? <ProgressiveCount max={target} duration={0.8} /> : 0}
			{suffix}
		</span>
	);
}

export function StatsBar({ dictionary }: StatsBarProps) {
	const { ref, isInView } = useInView({ threshold: 0.3 });

	return (
		<div
			ref={ref}
			className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-4 md:overflow-visible"
		>
			{stats.map((stat) => {
				const Icon = stat.icon;
				return (
					<div
						key={stat.valueKey}
						className="data-panel corner-brackets flex min-w-50 snap-center flex-col items-center gap-3 p-6 text-center md:min-w-0"
					>
						<Icon size={22} className="text-text-accent animate-neon-pulse" />
						<span className="font-display text-2xl font-bold text-text-accent neon-text-cyan">
							<StatValue
								value={dictionary[stat.valueKey]}
								isInView={isInView}
							/>
						</span>
						<span className="font-sans text-xs tracking-wider uppercase text-text-tertiary">
							{dictionary[stat.labelKey]}
						</span>
					</div>
				);
			})}
		</div>
	);
}
