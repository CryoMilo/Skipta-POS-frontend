export interface Order {
	_id: string;
	customerName: string;
	productName: string;
	vege: boolean;
	soup: boolean;
	orderCompleted: boolean;
	createdAt: string; // ISO 8601 date string
}

export interface OrderFormValues {
	customerName: string;
	menu: string;
	soup: boolean;
	vege: boolean;
}
