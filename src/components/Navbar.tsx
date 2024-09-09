"use client";

import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "./ui/button";
import Link from "next/link";
import { navblacklist } from "@/constants/nav";
import Image from "next/image";
import { ChevronLeftIcon } from "lucide-react";

const Navbar = () => {
	const pathname = usePathname();

	return navblacklist.some((link) => link === pathname) ? null : (
		<nav className="flex items-center justify-between p-4 py-6">
			<div>
				<Image
					width={80}
					height={80}
					className="md:hidden"
					src="/icons/SkiptaLogo.svg"
					alt="main logo"
				/>
				<div className="hidden gap-2 md:flex">
					<ChevronLeftIcon className="text-primary" />
					<span>Back</span>
				</div>
			</div>

			<div className="flex gap-3">
				<ThemeToggle />
				<Link href="/login">
					<Button>Login</Button>
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
