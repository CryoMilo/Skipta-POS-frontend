"use client";

import { setOrderCompletion } from "@/services/orders";
import { Button } from "../ui/button";
import { Order } from "@/types/orders";

export default function OrderButton({ order }: { order: Order }) {
	return (
		<Button
			onClick={() => {
				setOrderCompletion(order._id, order);
			}}>
			Completed
		</Button>
	);
}
