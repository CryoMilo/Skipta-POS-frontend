"use client";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle
} from "@/components/ui/card";
import Image from "next/image";
import { Edit, Info, Plus } from "lucide-react";
import Link from "next/link";
import { getImageSrc } from "@/utils/getImgSrc";
import { Product } from "@/types/products";
import { createOrder } from "@/services/orders";
import { revalidateOrders } from "../actions";
// import { useToast } from "@/components/ui/use-toast";

interface ProductCardProps {
	product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
	const { _id, image, productName, description, vegan } = product;
	// const { toast } = useToast();

	const addOrder = async () => {
		try {
			await createOrder({
				customerName: "Damian",
				productName: productName,
				vegan: vegan || false,
				orderCompleted: false,
				products: [{ productId: _id, quantity: 1 }]
			});
			revalidateOrders();
			// toast({
			// 	title: "Order Created!"
			// });
			alert("Done");
		} catch (error) {
			console.error("Failed to create order");
		}
	};

	return (
		<Card key={_id} className="group w-56 rounded-xl bg-primary">
			<CardContent className="relative flex flex-col p-1">
				<div className="relative h-48 w-full">
					<Image
						src={getImageSrc(image)}
						alt={productName}
						fill
						className="w-60 rounded-xl object-cover p-1 group-hover:blur-sm"
					/>
				</div>

				<CardHeader className="p-1 text-left group-hover:blur-sm">
					<CardTitle className="truncate text-left text-secondary">
						{productName}
					</CardTitle>
					<CardDescription className="line-clamp-2 h-10 text-secondary">
						{description}
					</CardDescription>
				</CardHeader>

				<div className="absolute left-[50%] top-[50%] hidden translate-x-[-50%] translate-y-[-50%] items-center justify-center gap-4 hover:flex group-hover:flex">
					<Link key={_id} href={`/products/${_id}`}>
						<Button className="h-12 w-12 rounded-full bg-black text-white">
							<Info className="min-h-6 min-w-6" />
						</Button>
					</Link>
					<Link key={_id} href={`/products/edit/${_id}`}>
						<Button className=" h-12 w-12 rounded-full bg-black text-white">
							<Edit className="min-h-6 min-w-6" />
						</Button>
					</Link>

					<Button
						onClick={addOrder}
						className=" h-12 w-12 rounded-full bg-black text-white">
						<Plus className="min-h-6 min-w-6" />
					</Button>
				</div>
			</CardContent>
		</Card>
	);
};
