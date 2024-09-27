export interface Order {
	id?: string;
	customerName: string;
	productName: string;
	vegan: boolean;
	products: { productId: string | undefined; quantity: number }[];
	orderCompleted: boolean;
}
