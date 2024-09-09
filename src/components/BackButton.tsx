"use client";

import { ChevronLeftIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BackButton = () => {
	const pathname = usePathname();

	const currentTab = pathname.split("/")[1];

	return (
		<Link href={`/${currentTab}`} className="hidden gap-2 md:flex">
			<ChevronLeftIcon className="text-primary" />
			<span>Back</span>
		</Link>
	);
};

export default BackButton;
