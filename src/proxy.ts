import { type NextRequest, NextResponse } from "next/server";
import { defaultLocale, locales } from "./i18n/config";

export function proxy(request: NextRequest) {
	const { pathname } = request.nextUrl;

	const pathnameHasLocale = locales.some(
		(locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
	);

	if (pathnameHasLocale) return;

	const acceptLanguage = request.headers.get("accept-language") ?? "";
	const preferred = acceptLanguage.split(",")[0]?.split("-")[0]?.toLowerCase();
	const locale =
		locales.find((l) => l.startsWith(preferred ?? "")) ?? defaultLocale;

	request.nextUrl.pathname = `/${locale}${pathname}`;
	return NextResponse.redirect(request.nextUrl);
}

export const config = {
	matcher: ["/((?!_next|api|favicon|skill|.*\\..*).*)"],
};
