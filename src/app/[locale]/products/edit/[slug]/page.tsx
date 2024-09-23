import ProductForm from "@/components/formInputs/ProductForm";
import { getOneProduct } from "@/services/products";
import { Product } from "@/types/products";

const ProductEdit = async ({ params }: { params: { slug: string } }) => {
	const data = await getOneProduct(params.slug);

	const productData: Product = data;

	return <ProductForm productData={productData} />;
};

export default ProductEdit;
