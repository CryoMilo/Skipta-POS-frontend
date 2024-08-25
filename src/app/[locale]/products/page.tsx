<<<<<<< HEAD
import { ProductCard } from "./ProductCard";

const Products = async () => {
	// console.log("MY PRODUCTS", products);
	return (
		<div className="flex">
			<ProductCard />
=======
import { Button } from "@/components/ui/button";
import { getProductList } from "@/services/products";
import { Product } from "@/types/products";
import Link from "next/link";

const Products = async () => {
	const data = await getProductList();

	const products: Product[] = data;

	// Convert Buffer to Base64 string
	// const base64Image = Buffer.from(products[1].image.data).toString("base64");
	// const imageSrc = `data:${products[1].contentType};base64,${base64Image}`;

	return (
		<div className="flex gap-3">
			{products.map((item: Product) => (
				<Link key={item._id} href={`/products/${item._id}`}>
					<Button>{item.productName}</Button>
				</Link>
			))}
>>>>>>> 229513e6f6110d2ea410b85e12b5b0131e14930c
		</div>
	);
};

export default Products;
