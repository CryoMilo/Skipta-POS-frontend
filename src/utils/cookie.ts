"use server";

import { cookies } from "next/headers";

export async function setCookie() {
	const cookieStore = cookies();
	cookieStore.set("name", "value", {
		httpOnly: true,
		secure: true,
		sameSite: "Lax",
		path: "/",
		maxAge: 3600 // 1 hour
	});
}
