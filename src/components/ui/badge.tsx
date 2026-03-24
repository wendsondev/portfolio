import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/src/lib/utils";

const badgeVariants = cva(
	"inline-flex w-fit shrink-0 items-center justify-center gap-1 font-sans text-xs",
	{
		variants: {
			variant: {
				default:
					"border border-transparent bg-primary px-2 py-0.5 text-primary-foreground",
				outline: "border border-border px-2 py-0.5 text-foreground",
				tech: "border border-text-accent/15 bg-text-accent/5 px-2 py-0.5 text-text-accent",
				highlight:
					"border border-neon-magenta/30 bg-neon-magenta/5 px-3 py-1 text-neon-magenta",
				status:
					"border border-text-accent/20 bg-bg-secondary/60 px-5 py-2 tracking-widest uppercase text-text-accent backdrop-blur-sm",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	},
);

function Badge({
	className,
	variant = "default",
	...props
}: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
	return (
		<span
			data-slot="badge"
			className={cn(badgeVariants({ variant }), className)}
			{...props}
		/>
	);
}

export { Badge, badgeVariants };
