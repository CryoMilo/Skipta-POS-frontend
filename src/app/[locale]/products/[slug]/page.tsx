import { getOneProduct } from "@/services/products";
import { Product } from "@/types/products";
import Image from "next/image";

export default async function Page({ params }: { params: { slug: string } }) {
	const data = await getOneProduct(params.slug);

	const productData: Product = data;

	const base64Image = Buffer.from(productData.image.data).toString("base64");
	const imageSrc = `data:${productData.contentType};base64,${base64Image}`;

	return (
		<div>
			<div className="flex flex-col p-20 lg:flex-row">
				<Image
					src={imageSrc}
					alt={productData.productName}
					width={400}
					height={400}
					className="p-10"
				/>

				<section className="border-l-4 border-l-yellow-400 px-10">
					<div>
						<p className="text-2xl text-yellow-400">Name</p>
						<p>{productData.productName}</p>
					</div>
					<br />
					<div>
						<p className="text-2xl text-yellow-400">What Am I?</p>
						<p>{productData.description}</p>
					</div>
					<br />
					<div>
						<p className="text-2xl text-yellow-400">What I have in me?</p>
						<ol>
							<li>Rice Noodles</li>
							<li>Garlic</li>
							<li>Onions</li>
						</ol>
					</div>
					<br />
					<div>
						<p className="text-2xl text-yellow-400">How I taste like?</p>
						<p>{productData.taste}</p>
					</div>
				</section>
			</div>
		</div>
	);
}
