import { TAG_PRODUCTS } from "./tags";
import { Product } from "@/types/products";

const url = `${process.env.NEXT_PUBLIC_NODE_SKIPTA_BACKEND_URL}/product`;
console.log(url);

export const getProductList = async () => {
	const res = await fetch(url, {
		next: { tags: [TAG_PRODUCTS] },
		credentials: "include",
		cache: "no-cache"
	});

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	return res.json();
};

export const getOneProduct = async (slug: string) => {
	const res = await fetch(`${url}/${slug}`, {
		next: { tags: [TAG_PRODUCTS] },
		credentials: "include",
		cache: "no-cache"
	});

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	return res.json();
};

export const EditOneProduct = async (
	productData: Partial<Product>,
	productID: string
) => {
	// const promise: string = `${url}/${productData._id}`;
	const data = { ...productData, _id: productID };
	const requestOptions = {
		method: "PUT",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(data),
		next: { tags: [TAG_PRODUCTS] }
	};

	const res = await fetch(url, requestOptions);

	if (!res.ok) {
		throw new Error("Failed to create order");
	}

	return res.json();
};

export const createProduct = async (productData: Product) => {
	const requestOptions = {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(productData),
		next: { tags: [TAG_PRODUCTS] }
	};

	const res = await fetch(url, requestOptions);

	if (!res.ok) {
		throw new Error("Failed to create order");
	}

	return res.json();
};
