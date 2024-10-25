"use server";

import { TAG_ORDERS, TAG_PRODUCTS, TAG_USERS } from "@/services/tags";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const revalidateOrders = () => {
	revalidateTag(TAG_ORDERS);
};

export const revalidateUsers = () => {
	revalidateTag(TAG_USERS);
};

export const revalidateProducts = () => {
	revalidateTag(TAG_PRODUCTS);
};

export const createCookie = (data: string) => {
	cookies().set("token", data);
};

export const deleteCookie = () => {
	cookies().delete("token");
};
