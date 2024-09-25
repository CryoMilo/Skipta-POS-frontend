import { getProductList } from "@/services/products";
import { ProductCard } from "./ProductCard";
import { Product } from "@/types/products";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const AddButton = () => (
	<div className="m-6 h-[60px] w-[60px] overflow-hidden rounded-full transition-all duration-500 ease-in-out hover:w-[150px] hover:bg-black">
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

const Products = async () => {
	const data = await getProductList();
	const products: Product[] = data;

	return (
		<div className="flex flex-wrap items-center justify-center gap-5 md:justify-normal">
			{products.map((product) => (
				<ProductCard key={product._id} product={product} />
			))}

			<div className="grid w-60 place-content-center">
				<AddButton />
			</div>
		</div>
	);
};

export default Products;
