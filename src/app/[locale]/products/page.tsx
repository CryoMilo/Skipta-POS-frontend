import { ProductCard } from "./ProductCard";

const Products = async () => {
	return (
		<div className="flex flex-wrap items-center justify-center gap-5 md:justify-normal">
			<ProductCard />
		</div>
	);
};

export default Products;
