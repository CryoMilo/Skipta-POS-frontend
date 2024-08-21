export interface ImageBuffer {
	type: string; // The type of the image, e.g., 'Buffer'
	data: Uint8Array; // The binary data of the image
}

export interface Product {
	_id: string;
	productName: string;
	description: string;
	vege: boolean;
	price: number;
	image: ImageBuffer;
	contentType: string;
	createdAt: string;
	updatedAt: string;
}

export interface ProductFormValues {
	productName: string;
	description: string;
	vege: boolean;
	price: number;
}
