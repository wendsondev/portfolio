"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/src/components/ui/button";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/src/components/ui/tooltip";
import { cn, cv } from "@/src/lib/utils";

export function ScrollToTop() {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const onScroll = () => setVisible(window.scrollY > 400);
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<div
			className={cn(
				"fixed bottom-6 right-6 z-20 transition-all duration-300",
				cv(
					String(visible),
					{
						true: "translate-y-0 opacity-100",
						false: "translate-y-4 opacity-0 pointer-events-none",
					},
					"translate-y-4 opacity-0 pointer-events-none",
				),
			)}
		>
			<Tooltip>
				<TooltipTrigger
					render={
						<Button
							variant="ghost-cyber"
							size="icon-lg"
							onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
							aria-label="Scroll to top"
							className="bg-bg-secondary/80 backdrop-blur-sm hover:shadow-[0_0_12px_var(--text-accent)]"
						/>
					}
				>
					<ArrowUp size={18} />
				</TooltipTrigger>
				<TooltipContent>Scroll to top</TooltipContent>
			</Tooltip>
		</div>
	);
}
