import { Order } from "@/types/orders";
import { revalidatePath } from "next/cache";
import { TAG_ORDERS } from "./tags";

const url = `${process.env.NEXT_PUBLIC_NODE_SKIPTA_BACKEND_URL}/order`;

export const getOrderList = async () => {
	const res = await fetch(url, {
		next: { tags: [TAG_ORDERS] },
		credentials: "include"
	});

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	return res.json();
};

export const createOrder = async (orderData: Order) => {
	const requestOptions = {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(orderData),
		next: { tags: [TAG_ORDERS] }
	};

	const res = await fetch(url, requestOptions);

	if (!res.ok) {
		throw new Error("Failed to create order");
	}

	return res.json();
};

export const setOrderCompletion = async (orderId: string, orderData: Order) => {
	const requestOptions = {
		method: "PUT",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({ ...orderData, orderCompleted: true }),
		next: { tags: [TAG_ORDERS] }
	};

	const res = await fetch(`${url}/${orderId}`, requestOptions);

	if (!res.ok) {
		throw new Error("Failed to update order");
	}

	revalidatePath("/orders", "page");

	return res.json();
};
