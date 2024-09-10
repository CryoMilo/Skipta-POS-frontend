import { ReactNode } from "react";
import Sidebar from "./Sidebar";

const MainLayout = (props: { children: ReactNode }) => {
	return (
		<div className="mb-20 flex">
			<Sidebar />
			<div className="m-5 w-full">{props.children}</div>
		</div>
	);
};

export default MainLayout;
