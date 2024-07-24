"use server";

import { TAG_ORDERS, TAG_USERS } from "@/services/tags";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export const revalidateOrders = () => {
	revalidateTag(TAG_ORDERS);
	redirect("/orders");
};

export const revalidateUsers = () => {
	revalidateTag(TAG_USERS);
};
