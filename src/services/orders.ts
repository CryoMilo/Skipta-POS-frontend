import { Order } from "@/types/orders";
import { revalidatePath } from "next/cache";

const url = "https://skipta-pos-backend.onrender.com/api/order";

export const getOrderList = async () => {
	const res = await fetch(url, {
		next: { tags: ["orders"] }
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
			// Add any additional headers as needed
		},
		body: JSON.stringify(orderData),
		next: { tags: ["orders"] }
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
			// Add any additional headers as needed
		},
		body: JSON.stringify({ ...orderData, orderCompleted: true }),
		next: { tags: ["orders"] }
	};

	const res = await fetch(`${url}/${orderId}`, requestOptions);

	if (!res.ok) {
		throw new Error("Failed to update order");
	}

	await revalidatePath("/orders", "page");

	return res.json();
};
