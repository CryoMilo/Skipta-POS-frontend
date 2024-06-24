export const getOrderList = async () => {
	const res = await fetch("https://skipta-pos-backend.onrender.com/api/order");

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	return res.json();
};
