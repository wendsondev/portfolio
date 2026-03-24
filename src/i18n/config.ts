export const locales = ["en", "pt-br"] as const;
export const defaultLocale = "en" satisfies Locale;

export type Locale = (typeof locales)[number];
