"use server";

import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export const revalidateOrders = () => {
	revalidateTag("orders");
	redirect("/orders");
};
