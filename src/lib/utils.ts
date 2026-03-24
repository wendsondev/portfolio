import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export type ClassName = string | ClassValue[];

export function cf(className: ClassName, extra: string, condition: boolean) {
	return cn(className, condition && extra);
}

export function cv<T extends string>(
	value: string,
	variants: Partial<Record<string, T>>,
	fallback: T,
): T {
	return variants[value] ?? fallback;
}
