import Link from "next/link";

type LogoProps = {
	size?: string;
	closed?: boolean;
	lang?: string;
};

export function Logo({
	size = "text-2xl",
	closed = false,
	lang = "en",
}: LogoProps) {
	return (
		<Link
			href={`/${lang}`}
			className={`${size} font-bold font-display tracking-tight gradient-text glitch-hover`}
		>
			{closed ? "</WS>" : "<WS>"}
		</Link>
	);
}
