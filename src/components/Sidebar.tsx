"use client";

import { type Sidebar } from "@/types/ui";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { useState } from "react";

const Sidebar = () => {
	const [sidebarElements, setSidebarElements] = useState<Sidebar[]>([
		{
			id: 1,
			name: "Dashboard",
			route: "/dashboard",
			active: false
		},
		{
			id: 2,
			name: "Orders",
			route: "/orders",
			active: true
		},
		{
			id: 3,
			name: "Products",
			route: "/products",
			active: false
		},
		{
			id: 4,
			name: "Test Client",
			route: "/testClient",
			active: false
		}
	]);

	const changeActiveLink = (id: number) => {
		setSidebarElements((prevElements) =>
			prevElements.map((element) =>
				element.id === id
					? { ...element, active: true }
					: { ...element, active: false }
			)
		);
	};

	return (
		<div className="m-3 min-h-[100vh] w-[15%] rounded-xl border-[1px] bg-secondary">
			<div className="mb-9 mt-4 flex w-full justify-center">
				<Image
					className="pt-4"
					width={80}
					height={80}
					src="/icons/SkiptaLogo.svg"
					alt="main logo"
				/>
			</div>
			<div className="sh flex flex-col gap-4 px-4">
				{sidebarElements.map(({ id, route, active, name }) => (
					<Link key={id} href={route}>
						<Button
							onClick={() => changeActiveLink(id)}
							className={`w-full ${active ? "shadow-md" : ""}`}
							variant={active ? "default" : "secondary"}>
							{name}
						</Button>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Sidebar;
