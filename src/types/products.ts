export type ImageContentType = "image/jpeg" | "image/png" | "image/gif";

export interface Product {
	_id: string;
	productName: string;
	description: string;
	taste: string;
	ingredients: { item: string }[];
	price: number;
	image?: string | undefined | File;
}
