"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ReactNode } from "react";
import { TooltipProvider } from "@/src/components/ui/tooltip";

export function ThemeProvider({ children }: { children: ReactNode }) {
	return (
		<NextThemesProvider
			attribute="class"
			defaultTheme="dark"
			enableSystem={true}
		>
			<TooltipProvider>{children}</TooltipProvider>
		</NextThemesProvider>
	);
}
