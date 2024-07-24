import { TAG_USERS } from "./tags";
import { User } from "@/types/user";

const url = `${process.env.NEXT_PUBLIC_NODE_SKIPTA_BACKEND_URL}/user`;

export const getUserList = async () => {
	const res = await fetch(url, {
		next: { tags: [TAG_USERS] }
	});

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	return res.json();
};

export const createUser = async (userData: User) => {
	const requestOptions = {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
			// Add any additional headers as needed
		},
		body: JSON.stringify(userData),
		next: { tags: [TAG_USERS] }
	};

	const res = await fetch(url, requestOptions);

	return res.json();
};
