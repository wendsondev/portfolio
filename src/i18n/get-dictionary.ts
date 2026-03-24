import type { Locale } from "./config";

const dictionaries = {
	en: () => import("./dictionaries/en.json").then((mod) => mod.default),
	"pt-br": () => import("./dictionaries/pt-br.json").then((mod) => mod.default),
};

export async function getDictionary(locale: Locale) {
	return dictionaries[locale]();
}

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;
