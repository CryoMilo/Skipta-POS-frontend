import { type Sidebar } from "@/types/ui";
import Image from "next/image";
import { Button } from "./ui/button";

const Sidebar = () => {
	const sidebarElements: Sidebar[] = [
		{
			id: 1,
			name: "Dashboard",
			route: "/dashboard",
			active: false
		},
		{
			id: 1,
			name: "Orders",
			route: "/kitchen",
			active: true
		},
		{
			id: 1,
			name: "Stock",
			route: "/stock",
			active: false
		}
	];

	return (
		<div className="bg-secondary m-3 min-h-[100vh] w-[15%] rounded-xl border-[1px]">
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
				{sidebarElements.map((element: Sidebar) => (
					<Button
						className={`w-full ${element.active ? "shadow-md" : ""}`}
						variant={element.active ? "default" : "secondary"}
						key={element.id}>
						{element.name}
					</Button>
				))}
			</div>
		</div>
	);
};

export default Sidebar;
