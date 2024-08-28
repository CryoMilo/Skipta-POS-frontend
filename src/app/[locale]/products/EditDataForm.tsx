"use client";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { Product } from "@/types/products";
import { useState } from "react";
import { EditOneProduct } from "@/services/products";

type EditDataProps = {
	product: Product;
};

export function EditDataForm({ product }: EditDataProps) {
	const [productName, setProductName] = useState(product?.productName || "");
	const [description, setDescription] = useState(product?.description || "");
	const [price, setPrice] = useState(product?.price?.toString() || "");

	const base64Image = Buffer.from(product.image.data).toString("base64");
	const imageSrc = `data:${product.contentType};base64,${base64Image}`;

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		const updatedProduct: Partial<Product> = {
			...product,
			productName,
			description,
			price: parseFloat(price) // Convert string to number
		};
		console.log("updaeDate", updatedProduct);
		const update = await EditOneProduct(updatedProduct, product._id);
		console.log("apiEdiProdcut", update);
	};

	return (
		<Dialog>
			<DialogTrigger className="w-full rounded-full bg-black p-2 font-bold text-white hover:bg-white hover:text-yellow-600">
				<div>Edit</div>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Edit Menu</DialogTitle>
					<DialogDescription>
						Make changes to your Menu here. Click save when you are done.
					</DialogDescription>
				</DialogHeader>
				<form onSubmit={handleSubmit}>
					<div className="grid gap-4 py-4">
						<div className="m-auto grid grid-cols-2 gap-4">
							<Image
								src={imageSrc}
								alt=""
								width={300}
								height={300}
								className=" h-[150px] w-[200px]"
							/>
							<Button variant="secondary" className="m-auto w-[100px]">
								Edit Image
							</Button>
						</div>
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="name" className="text-right">
								Menu Name
							</Label>
							<Input
								id="name"
								value={productName}
								onChange={(e) => setProductName(e.target.value)}
								className="col-span-3"
							/>
						</div>
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="price" className="text-right">
								Price
							</Label>
							<Input
								id="price"
								type="number"
								value={price}
								className="col-span-3"
								onChange={(e) => setPrice(e.target.value)}
							/>
						</div>
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="description" className="text-right">
								Description
							</Label>
							<Input
								id="description"
								value={description}
								onChange={(e) => setDescription(e.target.value)}
								className="col-span-3"
							/>
						</div>
					</div>
					<DialogFooter>
						<Button type="submit">Save changes</Button>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	);
}
