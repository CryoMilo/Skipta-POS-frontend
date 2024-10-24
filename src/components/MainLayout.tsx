"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { navblacklist } from "@/constants/nav";

const MainLayout = (props: { children: ReactNode; locale: string }) => {
	const pathname = usePathname();

	const showSidebarAndNavbar = !navblacklist.includes(pathname);

	return (
		<>
			{showSidebarAndNavbar ? (
				<>
					<section className="layout h-[100vh] w-full">
						<div className="sidebar h-full">
							<Sidebar />
						</div>
						<div className="navbar m-4">
							<Navbar locale={props.locale} />
						</div>
						<main className="content m-10">{props.children}</main>
					</section>
				</>
			) : (
				<main className="m-10">{props.children}</main>
			)}
		</>
	);
};

export default MainLayout;
