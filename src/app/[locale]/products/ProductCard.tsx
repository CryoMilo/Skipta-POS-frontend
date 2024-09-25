import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle
} from "@/components/ui/card";
import Image from "next/image";
import { Edit, Info } from "lucide-react";
import Link from "next/link";
import { getImageSrc } from "@/utils/getImgSrc";
import { Product } from "@/types/products";

interface ProductCardProps {
	product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = async ({ product }) => {
	const { _id, image, productName, description } = product;

	return (
		<Card key={_id} className="group w-48 rounded-xl bg-primary">
			<CardContent className="relative flex flex-col p-1">
				<Image
					src={getImageSrc(image)}
					alt={productName}
					width={400}
					height={400}
					className="w-60 rounded-xl object-cover p-1 group-hover:blur-sm"
				/>

				<CardHeader className="p-1 text-left group-hover:blur-sm">
					<CardTitle className="truncate text-left text-secondary">
						{productName}
					</CardTitle>
					<CardDescription className="line-clamp-2 h-10 text-secondary">
						{description}
					</CardDescription>
				</CardHeader>

				<div className="absolute left-[27%] top-[40%] hidden items-center justify-center gap-4 hover:flex group-hover:flex">
					<Link key={_id} href={`/products/${_id}`}>
						<Button className="h-12 w-12 rounded-full bg-black text-white">
							<Info className="min-h-6 min-w-6" />
						</Button>
					</Link>
					<Link key={_id} href={`/products/edit/${_id}`}>
						<Button className=" h-12 w-12 rounded-full bg-black text-white">
							<Edit className="min-h-6 min-w-6" />
						</Button>
					</Link>
				</div>
			</CardContent>
		</Card>
	);
};
