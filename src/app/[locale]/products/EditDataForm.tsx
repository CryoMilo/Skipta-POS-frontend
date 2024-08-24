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
// import { useState } from "react";
import { Product } from "@/types/products";
// import { Buffer } from "buffer";
// import { UpdateProduct } from "@/services/products";

type EditDataProps = {
	product: Product;
	// id: string; // Product ID
	// onSubmit: (product: Product) => void; // Callback to handle submission
};

export function EditDataForm({ product }: EditDataProps) {
	// const [productName, setProductName] = useState(product?.productName || "");
	// const [description, setDescription] = useState(product?.description || "");
	// const [price, setPrice] = useState(product?.price?.toString() || "");

	const base64Image = Buffer.from(product.image.data).toString("base64");
	const imageSrc = `data:${product.contentType};base64,${base64Image}`;

	// const handleSubmit = (e: React.FormEvent) => {
	// 	e.preventDefault();
	// 	const updatedProduct: Product = {
	// 		...product,
	// 		_id: id,
	// 		productName,
	// 		description,
	// 		price: parseFloat(price) // Convert string to number
	// 	};
	// 	UpdateProduct(updatedProduct);
	// };

	return (
		<Dialog>
			<DialogTrigger>
				<Button
					variant="outline"
					className="w-full rounded-full bg-black text-white">
					Edit
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Edit Menu</DialogTitle>
					<DialogDescription>
						Make changes to your Menu here. Click save when you're done.
					</DialogDescription>
				</DialogHeader>
				{/* <form onSubmit={handleSubmit}> */}
				<div className="grid gap-4 py-4">
					<div className="grid grid-cols-4 items-center gap-4">
						<Image
							src={imageSrc}
							alt=""
							width={300}
							height={300}
							className="h-full w-full"
						/>
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="name" className="text-right">
							Menu Name
						</Label>
						<Input
							id="name"
							value={product.productName}
							// onChange={(e) => setProductName(e.target.value)}
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
							value={product.price}
							className="col-span-3"
							// onChange={(e) => setPrice(e.target.value)}
						/>
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="description" className="text-right">
							Description
						</Label>
						<Input
							id="description"
							value={product.description}
							// onChange={(e) => setDescription(e.target.value)}
							className="col-span-3"
						/>
					</div>
				</div>
				<DialogFooter>
					<Button type="submit">Save changes</Button>
				</DialogFooter>
				{/* </form> */}
			</DialogContent>
		</Dialog>
	);
}
