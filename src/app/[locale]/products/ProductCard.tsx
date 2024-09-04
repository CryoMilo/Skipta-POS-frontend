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
import { Plus } from "lucide-react";
import Link from "next/link";
import { convertToBase64 } from "@/utils/convertToBase64";

const AddButton = () => (
	<div className="fixed bottom-0 right-0 m-6 h-[60px] w-[60px] overflow-hidden rounded-full transition-all duration-500 ease-in-out hover:w-[150px] hover:bg-black">
		<Link href="./products/create">
			<div className="flex items-center">
				<Button className="h-[60px] w-[60px] rounded-full transition-transform duration-300 hover:rotate-180">
					<Plus className="min-h-6 min-w-6" />
				</Button>
				<span className="ml-[10px] text-xl text-white">Create</span>
			</div>
		</Link>
	</div>
);

export const ProductCard = async () => {
	const data = await getProductList();
	const products: Product[] = data;

	return (
		<>
			{products.map((product, index) => {
				const imageSrc = convertToBase64(product);

				return (
					<Card key={index} className="w-60 rounded-xl bg-[#FFDF59]">
						<CardContent className="flex flex-col p-1">
							<Image
								src={imageSrc}
								alt={product.productName}
								width={400}
								height={400}
								className="w-60 rounded-xl object-cover p-1"
							/>

							<CardHeader className="p-1 text-left">
								<CardTitle className="truncate text-left text-secondary">
									{product.productName}
								</CardTitle>
								<CardDescription className="line-clamp-3 text-secondary">
									{product.description}
								</CardDescription>
							</CardHeader>
						</CardContent>
						<CardFooter>{/* <EditDataForm product={product} /> */}</CardFooter>
					</Card>
				);
			})}
			<AddButton />
		</>
	);
};
