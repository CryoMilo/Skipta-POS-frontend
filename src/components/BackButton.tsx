"use client";

import { ChevronLeftIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BackButton = ({ locale }: { locale: string }) => {
	const pathname = usePathname();

	const currentTab =
		locale === "th" ? pathname.split("/")[2] : pathname.split("/")[1];

	if (pathname == `/${currentTab}`) {
		return null;
	}

	return (
		<Link href={`/${currentTab}`} className="hidden gap-2 md:flex">
			<ChevronLeftIcon className="text-primary" />
			<span>Back</span>
		</Link>
	);
};

export default BackButton;
