"use client";

import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "./ui/button";
import Link from "next/link";
import { navblacklist } from "@/constants/nav";

const Navbar = () => {
	const pathname = usePathname();

	return navblacklist.some((link) => link === pathname) ? null : (
		<nav className="flex justify-end p-3">
			<ThemeToggle />
			<Link href="/login">
				<Button>Login</Button>
			</Link>
		</nav>
	);
};

export default Navbar;
