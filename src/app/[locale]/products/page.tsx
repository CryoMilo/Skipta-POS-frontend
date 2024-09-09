import { ProductCard } from "./ProductCard";

const Products = async () => {
	return (
		<div className="h-fit w-full rounded-xl bg-secondary p-8">
			<div className="flex flex-wrap items-center justify-center gap-5 md:justify-normal">
				<ProductCard />
			</div>
		</div>
	);
};

export default Products;
