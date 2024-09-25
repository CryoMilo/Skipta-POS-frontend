"use client";

import { TextField } from "@/components/formInputs/TextField";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { createProduct, updateProduct } from "@/services/products";
import { useToast } from "@/components/ui/use-toast";
import { FormValues } from "@/types/form";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import ImageUpload from "@/components/formInputs/ImageUpload";
import { convertToBase64 } from "@/utils/convertToBase64";
import { revalidateProducts } from "@/app/[locale]/actions";
import { Product } from "@/types/products";
import { getImageSrc } from "@/utils/getImgSrc";

interface ProductFormProps {
	productData: Product | undefined;
}

const ProductForm: React.FC<ProductFormProps> = ({ productData }) => {
	const { toast } = useToast();

	const { handleSubmit, control } = useForm<FormValues>({
		defaultValues: {
			_id: productData?._id || "",
			productName: productData?.productName || "",
			description: productData?.description || "",
			ingredients: productData?.ingredients || [{ item: "" }],
			taste: productData?.taste || "",
			image: getImageSrc(productData?.image),
			price: productData?.price || 0
		}
	});

	const { fields, append, remove } = useFieldArray({
		control,
		name: "ingredients"
	});

	const onSubmit: SubmitHandler<FormValues> = async (data) => {
		const { image, productName, ingredients, description, taste, price } = data;

		let processedImage: string | undefined;

		if (
			image &&
			typeof image === "object" &&
			"name" in image &&
			"size" in image
		) {
			// Convert the File to a Base64 string
			processedImage = await convertToBase64(image);
		} else if (typeof data.image === "string") {
			// If it's already a Base64 string, just use it
			processedImage = data.image;
		}

		if (productData) {
			try {
				// Call API with the processed image
				const updatedProduct = await updateProduct({
					_id: productData?._id,
					productName,
					description,
					ingredients,
					taste,
					price,
					image: processedImage // Base64 encoded image
				});

				revalidateProducts();

				if (Object.hasOwn(updatedProduct, "error")) {
					toast({
						variant: "destructive",
						title: updatedProduct.error
					});
				} else {
					toast({
						title: "Product Updated!"
					});
				}
			} catch (error) {
				toast({
					title: "An error occurred"
				});
			}
		} else {
			try {
				const _id: string = crypto.randomUUID();

				const createdProduct = await createProduct({
					_id,
					productName,
					description,
					ingredients,
					taste,
					price,
					image: processedImage
				});

				revalidateProducts();

				if (Object.hasOwn(createdProduct, "error")) {
					toast({
						variant: "destructive",
						title: createdProduct.error
					});
				} else {
					toast({
						title: "Product Created!"
					});
				}
			} catch (error) {
				toast({
					title: "An error occurred"
				});
			}
		}
	};

	return (
		<div className="p-6">
			<h1>Create Your Product</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="grid grid-cols-1 place-content-center md:grid-cols-[300px_1fr]">
					<ImageUpload id="image" control={control} />

					<section className="grid gap-4 px-5 md:border-l-4 md:border-l-yellow-400 md:px-10">
						<div className="grid gap-4">
							<Label htmlFor="first-name">Menu Name</Label>
							<TextField
								type="text"
								id="productName"
								name="productName"
								control={control}
								placeholder="Nan Gyi Thoke"
							/>
						</div>
						<div className="grid gap-4">
							<Label htmlFor="description">What am I?</Label>
							<TextField
								id="description"
								type="text"
								name="description"
								control={control}
								placeholder="I am food"
							/>
						</div>
						<div className="grid gap-4">
							<Label htmlFor="first-name">Price</Label>
							<TextField
								type="number"
								id="price"
								name="price"
								control={control}
								placeholder="0"
							/>
						</div>

						<div className="grid gap-4">
							<Label htmlFor="ingredients">What I have in me?</Label>
							{fields.map((field, index) => (
								<div key={field.id} className="flex gap-4">
									<TextField
										id={`ingredients.${index}.item`}
										name={`ingredients.${index}.item`}
										control={control}
										type="text"
										placeholder={`ingredient ${index + 1}`}
									/>
									<Button
										type="button"
										className="text-xl"
										variant="outline"
										onClick={() => append({ item: "" })}>
										+
									</Button>
									<Button
										className="text-xl"
										type="button"
										variant="outline"
										onClick={() => remove(index)}>
										-
									</Button>
								</div>
							))}
						</div>
						<div className="grid gap-4">
							<Label htmlFor="taste">How I taste like?</Label>
							<TextField
								name="taste"
								control={control}
								id="taste"
								type="text"
							/>
						</div>
						<Button type="submit" className="mt-9 place-self-start">
							{productData === undefined ? "Create" : "Save"}
						</Button>
					</section>
				</div>
			</form>
		</div>
	);
};

export default ProductForm;
