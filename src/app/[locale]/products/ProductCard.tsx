import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle
} from "@/components/ui/card";
import Image from "next/image";
import { getProductList } from "@/services/products";
import { Product } from "@/types/products";
import { Edit, Info, Plus } from "lucide-react";
import Link from "next/link";
import { getImageSrc } from "@/utils/getImgSrc";

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

export const ProductCard = async () => {
	const data = await getProductList();
	const products: Product[] = data;

	return (
		<>
			{products.map((product, index) => {
				return (
					<Card key={index} className="group w-60 rounded-xl bg-primary">
						<CardContent className="relative flex flex-col p-1">
							<Image
								src={getImageSrc(product.image)}
								alt={product.productName}
								width={400}
								height={400}
								className="rounded-xl object-cover p-1 group-hover:blur-sm"
							/>

							<CardHeader className="p-1 text-left group-hover:blur-sm">
								<CardTitle className="truncate text-left text-secondary">
									{product.productName}
								</CardTitle>
								<CardDescription className="line-clamp-2 h-10 text-secondary">
									{product.description}
								</CardDescription>
							</CardHeader>

							<div className="absolute left-[27%] top-[40%] hidden items-center justify-center gap-4 hover:flex group-hover:flex">
								<Link key={product._id} href={`/products/${product._id}`}>
									<Button className="h-12 w-12 rounded-full bg-black text-white">
										<Info className="min-h-6 min-w-6" />
									</Button>
								</Link>
								<Link key={product._id} href={`/products/edit/${product._id}`}>
									<Button className=" h-12 w-12 rounded-full bg-black text-white">
										<Edit className="min-h-6 min-w-6" />
									</Button>
								</Link>
							</div>
						</CardContent>
						{/* <CardFooter className="flex justify-around pt-2">
							<Link key={product._id} href={`/products/${product._id}`}>
								<Button className="bg-black text-white">Details</Button>
							</Link>
							<Button className=" bg-black text-white">
								<Plus className="min-h-6 min-w-6" />
							</Button>
						</CardFooter> */}
					</Card>
				);
			})}
			<div className="grid w-60 place-content-center">
				<AddButton />
			</div>
		</>
	);
};
