"use client";

import { I18nextProvider } from "react-i18next";
import { createInstance } from "i18next";
import serverTranslation from "./app/i18n/server";

export default function TranslationProvider({ children, locale, resources }) {
	const i18n = createInstance();
	serverTranslation(locale, i18n, resources);
	return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
