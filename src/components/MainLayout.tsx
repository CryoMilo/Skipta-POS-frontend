import { ReactNode } from "react";
import Sidebar from "./Sidebar";

const MainLayout = (props: { children: ReactNode }) => {
	return (
		<div className="flex">
			<Sidebar />
			<div className="m-3 w-full">{props.children}</div>
		</div>
	);
};

export default MainLayout;
