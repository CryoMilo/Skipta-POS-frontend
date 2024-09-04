import { ProductCard } from "./ProductCard";

const Products = async () => {
	return (
		<div className="flex flex-wrap gap-5">
			<ProductCard />
		</div>
	);
};

export default Products;
