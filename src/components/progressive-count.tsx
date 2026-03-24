"use client";

import { useEffect, useRef } from "react";

interface ProgressiveCountProps {
	max: number;
	round?: boolean;
	duration?: number;
	invert?: boolean;
}

export function ProgressiveCount({
	max,
	round = true,
	invert = false,
	duration = 1,
}: ProgressiveCountProps) {
	const countRef = useRef<HTMLSpanElement>(null);

	useEffect(() => {
		const start = invert ? max : 0;
		const end = invert ? 0 : max;
		const startTime = performance.now();
		const durationMs = duration * 1000;

		const animateCount = (currentTime: number) => {
			const elapsedTime = currentTime - startTime;
			const progress = Math.min(elapsedTime / durationMs, 1);
			const currentCount = start + (end - start) * progress;

			if (countRef.current) {
				countRef.current.textContent = String(
					round ? Math.round(currentCount) : currentCount,
				);
			}

			if (progress < 1) {
				requestAnimationFrame(animateCount);
			}
		};

		requestAnimationFrame(animateCount);
	}, [max, round, invert, duration]);

	return <span ref={countRef}>{invert ? max : 0}</span>;
}
