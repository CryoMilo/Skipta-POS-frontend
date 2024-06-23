import { ReactNode } from "react";
import Sidebar from "./Sidebar";

const MainLayout = (props: { children: ReactNode }) => {
	return (
		<div className="flex h-[100vh]">
			<Sidebar />
			<div className="w-full">{props.children}</div>
		</div>
	);
};

export default MainLayout;
