"use client";

import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/src/lib/utils";

const buttonVariants = cva(
	"group/button inline-flex shrink-0 items-center justify-center border border-transparent text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50 active:translate-y-px disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
	{
		variants: {
			variant: {
				default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
				outline:
					"border-border bg-background hover:bg-muted hover:text-foreground",
				secondary:
					"bg-secondary text-secondary-foreground hover:bg-secondary/80",
				ghost: "hover:bg-muted hover:text-foreground",
				cyber:
					"neon-border bg-text-accent/10 font-sans tracking-widest uppercase text-text-accent glitch-hover hover:bg-text-accent/20",
				"ghost-cyber":
					"border-text-accent/20 bg-bg-secondary text-text-accent hover:border-text-accent hover:shadow-[0_0_8px_var(--text-accent)]",
			},
			size: {
				default: "h-8 gap-1.5 px-2.5",
				sm: "h-7 gap-1 px-2.5 text-xs",
				lg: "h-9 gap-1.5 px-3",
				icon: "size-8",
				"icon-sm": "size-7",
				"icon-lg": "size-10",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);

function Button({
	className,
	variant = "default",
	size = "default",
	...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
	return (
		<ButtonPrimitive
			data-slot="button"
			className={cn(buttonVariants({ variant, size, className }))}
			{...props}
		/>
	);
}

export { Button, buttonVariants };
