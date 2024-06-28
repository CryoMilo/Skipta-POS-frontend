import { Order } from "@/types/orders";

export const getOrderList = async () => {
	const res = await fetch("https://skipta-pos-backend.onrender.com/api/order");

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	return res.json();
};

export const createOrder = async (orderData: Order) => {
	const url = "https://skipta-pos-backend.onrender.com/api/order";

	const requestOptions = {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
			// Add any additional headers as needed
		},
		body: JSON.stringify(orderData)
	};

	const res = await fetch(url, requestOptions);

	if (!res.ok) {
		throw new Error("Failed to create order");
	}

	return res.json();
};
