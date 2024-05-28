import serverTranslation from "../i18n/server";

export default async function Home({
	params: { locale }
}: {
	params: { locale: string };
}) {
	const { t } = await serverTranslation(locale);

	return (
		<main>
			<p>Skipta restaurants POS App</p>
			{t("Hello")}
		</main>
	);
}
