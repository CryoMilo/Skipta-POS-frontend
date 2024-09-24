import { ReactNode } from "react";
import Sidebar from "./Sidebar";

const MainLayout = (props: { children: ReactNode }) => {
	return (
		<div className="flex h-full min-h-screen">
			<Sidebar />
			<div className="m-10 w-full">{props.children}</div>
		</div>
	);
};

export default MainLayout;
