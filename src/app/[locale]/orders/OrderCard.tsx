"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Minus, Plus } from "lucide-react";
import { getImageSrc } from "@/utils/getImgSrc";
import { Order } from "@/types/orders";

interface OrderCardProps {
	order: Order;
}

const OrderCard: React.FC<OrderCardProps> = ({ order }) => {
	const { productName } = order;

	// const addOrder = async () => {
	// 	try {
	// 		await createOrder({
	// 			customerName: "Damian",
	// 			productName: productName,
	// 			vegan: vegan || false,
	// 			orderCompleted: false,
	// 			products: [{ productId: _id, quantity: 1 }]
	// 		});
	// 		revalidateOrders();
	// 		toast({
	// 			title: "Order Created!"
	// 		});
	// 	} catch (error) {
	// 		console.error("Failed to create order");
	// 	}
	// };

	return (
		<Card key={productName} className="group w-56 rounded-xl bg-primary">
			<CardContent className="relative flex flex-col p-1">
				<div className="relative h-48 w-full">
					<Image
						src={getImageSrc("")}
						alt={productName}
						fill
						className="w-60 rounded-xl object-cover p-1"
					/>
				</div>

				<CardHeader className="p-1 text-left">
					<CardTitle className="truncate text-left text-secondary">
						{productName}
					</CardTitle>
				</CardHeader>

				<section className="flex w-full items-center justify-around py-3 text-secondary">
					<button className="rounded-full bg-secondary p-2 text-primary">
						<Minus />
					</button>
					<p>5</p>
					<button className="rounded-full bg-secondary p-2 text-primary">
						<Plus />
					</button>
				</section>
			</CardContent>
		</Card>
	);
};

export default OrderCard;
