import { getOneProduct } from "@/services/products";
import { Product } from "@/types/products";
import Image from "next/image";

export default async function Page({ params }: { params: { slug: string } }) {
	const data = await getOneProduct(params.slug);

	const productData: Product = data;

	const base64Image =
		productData.image && Buffer.from(productData.image.data).toString("base64");
	const imageSrc = `data:${productData.contentType};base64,${base64Image}`;

	return (
		<div>
			<div className="flex flex-col items-start p-10 lg:flex-row">
				<Image
					src={imageSrc}
					alt={productData.productName}
					width={400}
					height={400}
					className="p-10"
				/>

				<section className="md:border-l-4 md:border-l-yellow-400 md:px-10">
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
							{productData.ingredients.map((element: { item: string }) => (
								<li key={element.item}> - {element.item}</li>
							))}
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
