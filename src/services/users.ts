import { TAG_USERS } from "./tags";
import { LoginCredentials, User } from "@/types/user";

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

export const loginUser = async (userData: LoginCredentials) => {
	const requestOptions = {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
			// Add any additional headers as needed
		},
		body: JSON.stringify(userData),
		next: { tags: [TAG_USERS] }
	};

	const res = await fetch(`${url}/login`, requestOptions);

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

	const res = await fetch(`${url}/register`, requestOptions);

	return res.json();
};
