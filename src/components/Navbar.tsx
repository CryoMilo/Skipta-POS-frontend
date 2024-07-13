"use client";

import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "./ui/button";
import Link from "next/link";

const Navbar = () => {
	const pathname = usePathname();
	const strippedPathname = pathname.replace(/^\/[a-z]{2}\//, "/");

	return (
		strippedPathname !== "/login" && (
			<nav className="flex justify-end p-3">
				<ThemeToggle />
				<Link href="/login">
					<Button>Login</Button>
				</Link>
			</nav>
		)
	);
};

export default Navbar;
