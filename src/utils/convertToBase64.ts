import { Product } from "@/types/products";

export const convertToBase64 = (data: Product) => {
	const base64Image = Buffer.from(data.image.data).toString("base64");
	const imageSrc = `data:${data.contentType};base64,${base64Image}`;

	return imageSrc;
};
