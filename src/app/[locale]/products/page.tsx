import { getProductList } from "@/services/products";
import { Product } from "@/types/products";
import Image from "next/image";

const Products = async () => {
	const data = await getProductList();

	const products: Product[] = data;

	console.log("MY PRODUCTS", products);

	// Convert Buffer to Base64 string
	const base64Image = Buffer.from(products[0].image.data).toString("base64");
	const imageSrc = `data:${products[0].contentType};base64,${base64Image}`;

	return (
		<div>
			<Image
				src={imageSrc}
				alt={products[0].productName}
				width={1920}
				height={1080}
				className="h-full w-full p-40"
			/>
		</div>
	);
};

export default Products;
