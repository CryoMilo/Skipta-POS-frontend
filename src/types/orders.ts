export interface Order {
	id: string;
	customerName: string;
	menuName: string;
	vege: boolean;
	soup: boolean;
	orderCompleted: boolean;
	createdAt: string; // ISO 8601 date string
}
