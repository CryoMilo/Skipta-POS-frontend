import { ReactElement } from "react";

export interface Sidebar {
	id: number;
	name: string;
	route: string;
	active: boolean;
	icon: ReactElement;
}
