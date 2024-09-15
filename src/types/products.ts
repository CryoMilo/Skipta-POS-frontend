export interface ImageBuffer {
	type: string; // The type of the image, e.g., 'Buffer'
	data: Uint8Array; // The binary data of the image
}

export interface Product {
	_id: string;
	productName: string;
	description: string;
	taste: string;
	ingredients: { item: string }[];
	price: number;
	image?: ImageBuffer;
	contentType?: string | undefined;
}
