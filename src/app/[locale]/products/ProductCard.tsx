// import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
} from "@/components/ui/card";
import Image from "next/image";
import { getProductList } from "@/services/products";
import { Product } from "@/types/products";
import { EditDataForm } from "./EditDataForm";
import { Plus } from "lucide-react";

export const ProductCard = async () => {
	const data = await getProductList();
	const products: Product[] = data;

	return (
		<div className="">
			<div className="flex flex-col gap-2 lg:flex-row">
				{products.map((product, index) => {
					const base64Image = Buffer.from(product.image.data).toString(
						"base64"
					);
					const imageSrc = `data:${product.contentType};base64,${base64Image}`;

					return (
						<Card key={index} className="m-auto rounded-3xl bg-primary">
							<CardContent className="flex flex-col items-center justify-center p-2">
								<Image
									src={imageSrc}
									alt={product.productName}
									width={300}
									height={300}
									className="h-[200px] w-[300px] rounded-3xl p-4"
								/>
								<CardHeader className="flex flex-row gap-6 space-y-0">
									<CardTitle className="text-xl">
										{product.productName}
									</CardTitle>
									<CardDescription className="text-xl font-semibold text-black">
										{product.price} THB
									</CardDescription>
								</CardHeader>
							</CardContent>
							<CardFooter>
								<EditDataForm product={product} />
							</CardFooter>
						</Card>
					);
				})}
			</div>
			<div className=" static bottom-0 right-0 m-6 h-[60px] w-[60px] overflow-hidden rounded-full transition-all duration-500 ease-in-out hover:w-[150px] hover:bg-black lg:absolute">
				<div className="flex items-center">
					<Button className="h-[60px] w-[60px] rounded-full transition-transform duration-300 hover:rotate-180">
						<Plus className="min-h-6 min-w-6" />
					</Button>
					<span className="ml-[10px] text-xl text-white">Create</span>
				</div>
			</div>
		</div>
	);
};
