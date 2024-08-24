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
// import { useParams } from "next/navigation";

type CardProps = React.ComponentProps<typeof Card>;

export async function ProductCard({ className, ...props }: CardProps) {
	// const [products, setProducts] = useState<Product[]>([]);
	// const { id } = useParams();
	//fetch product data
	const data = await getProductList();
	const products: Product[] = data;
	console.log(products);

	// useEffect(() => {
	// 	const fetchProducts = async () => {
	// 		const data = await getProductList();
	// 		setProducts(data);
	// 	};
	// 	fetchProducts();
	// }, []);
	// console.log(products);

	// const handleUpdateProduct = async (updatedProduct: Product) => {
	// 	if (typeof id === "string") {
	// 		try {
	// 			await UpdateProduct(updatedProduct);
	// 			// Update local state with the new product list
	// 			const data = await getProductList();
	// 			setProducts(data);
	// 		} catch (error) {
	// 			console.error("Failed to update product:", error);
	// 		}
	// 	} else {
	// 		console.error("Invalid product ID:", id);
	// 	}
	// };

	return (
		<div>
			<div className="flex gap-2">
				{products.map((product, index) => {
					const base64Image = Buffer.from(product.image.data).toString(
						"base64"
					);
					const imageSrc = `data:${product.contentType};base64,${base64Image}`;

					return (
						<Card key={index} className="rounded-3xl bg-primary">
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
			<div className="absolute bottom-0 right-0 m-6 h-[60px] w-[60px] overflow-hidden rounded-full transition-all duration-500 ease-in-out hover:w-[150px] hover:bg-black">
				<div className="flex items-center">
					<Button className="h-[60px] w-[60px] rounded-full transition-transform duration-300 hover:rotate-180">
						<Plus className="min-h-6 min-w-6" />
					</Button>
					<span className="ml-[10px] text-xl text-white">Create</span>
				</div>
			</div>
		</div>
	);
}
