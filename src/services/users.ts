"use server";

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
	const res = await fetch(`${url}/login`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(userData),
		next: { tags: [TAG_USERS] },
		credentials: "include"
	});

	return res.json();
};

export const createUser = async (userData: User) => {
	const res = await fetch(`${url}/register`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(userData),
		next: { tags: [TAG_USERS] },
		credentials: "include"
	});

	return res.json();
};
