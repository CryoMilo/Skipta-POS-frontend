"use client";

import { type Sidebar } from "@/types/ui";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
	LayoutDashboard,
	PackageSearch,
	Plus,
	ShoppingCart
} from "lucide-react";
import { usePathname } from "next/navigation";
import { navblacklist } from "@/constants/nav";

const Sidebar = () => {
	const pathname = usePathname();
	const [sidebarElements, setSidebarElements] = useState<Sidebar[]>([
		{
			id: 1,
			name: "Dashboard",
			route: "/dashboard",
			active: false,
			icon: <LayoutDashboard className="min-h-6 min-w-6" />
		},
		{
			id: 2,
			name: "Orders",
			route: "/orders",
			active: true,
			icon: <ShoppingCart className="min-h-6 min-w-6" />
		},
		{
			id: 3,
			name: "Products",
			route: "/products",
			active: false,
			icon: <PackageSearch className="min-h-6 min-w-6" />
		},
		{
			id: 4,
			name: "Test Client",
			route: "/testClient",
			active: false,
			icon: <Plus className="min-h-6 min-w-6" />
		}
	]);

	const changeActiveLink = (route: string) => {
		setSidebarElements((prevElements) =>
			prevElements.map((element) =>
				element.route === route
					? { ...element, active: true }
					: { ...element, active: false }
			)
		);
	};

	useEffect(() => {
		const strippedPathname = pathname.replace(/^\/[a-z]{2}\//, "/");
		changeActiveLink(strippedPathname);
	}, [pathname]);

	return navblacklist.some((link) => link === pathname) ? null : (
		<div>
			<div className="hidden h-full border-[1px] bg-secondary md:block">
				<div className="mb-9 mt-4 flex w-full justify-center">
					<Image
						className="pt-4"
						width={80}
						height={80}
						src="/icons/SkiptaLogo.svg"
						alt="main logo"
					/>
				</div>
				<div className="flex flex-col gap-4 px-4">
					{sidebarElements.map(({ id, route, active, name, icon }) => (
						<Link key={id} href={route}>
							<Button
								onClick={() => changeActiveLink(route)}
								className={`flex w-full justify-start gap-2 ${active ? "shadow-md" : ""}`}
								variant={active ? "default" : "secondary"}>
								{icon}
								<span className="hidden md:inline">{name}</span>
							</Button>
						</Link>
					))}
				</div>
			</div>
			{/* Bottom Bar */}
			<div className="fixed bottom-0 left-[50%] z-20 translate-x-[-50%] rounded-t-xl bg-secondary p-3 md:hidden">
				<div className="flex flex-row gap-4 px-4">
					{sidebarElements.map(({ id, route, active, icon }) => (
						<Link key={id} href={route}>
							<Button
								onClick={() => changeActiveLink(route)}
								className={`flex w-full justify-center gap-2 xl:justify-start ${active ? "shadow-md" : ""}`}
								variant={active ? "default" : "secondary"}>
								{icon}
							</Button>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
