"use client";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { TextField } from "@/components/formInputs/TextField";
import { SubmitHandler, useForm } from "react-hook-form";
import { CheckboxField } from "@/components/formInputs/CheckboxField";
// import { createOrder } from "@/services/orders";
// import { revalidateOrders } from "../actions";
// import { useToast } from "@/components/ui/use-toast";
import { FormValues } from "@/types/form";

export default function TestClient() {
	// const { toast } = useToast();
	const { handleSubmit, control } = useForm<FormValues>({
		defaultValues: {
			customerName: "",
			productName: "",
			vegan: false
		}
	});
	const onSubmit: SubmitHandler<FormValues> = async (data) => {
		console.log(data);
		// try {
		// 	const _id: string = crypto.randomUUID();
		// 	await createOrder({
		// 		_id,
		// 		customerName: data.customerName,
		// 		productName: data.productName,
		// 		vegan: data.vegan,
		// 		orderCompleted: false
		// 	});
		// 	revalidateOrders();
		// 	toast({
		// 		title: "Order Created!"
		// 	});
		// } catch (error) {
		// 	console.error("Failed to create order");
		// }
	};

	return (
		<Card className="mx-auto max-w-sm">
			<CardHeader>
				<CardTitle className="text-xl">Create Order</CardTitle>
				<CardDescription>Create testing order</CardDescription>
			</CardHeader>
			<CardContent>
				<form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
					<div className="grid gap-2">
						<Label htmlFor="productName">Menu</Label>
						<TextField
							control={control}
							name="productName"
							id="productName"
							type="text"
							placeholder="Pad Kra Pao"
							required
						/>
					</div>
					<div className="grid gap-2">
						<Label htmlFor="customerName">Customer Name</Label>
						<TextField
							control={control}
							id="customerName"
							name="customerName"
							type="text"
							placeholder="Damian"
							required
						/>
					</div>
					<Label htmlFor="customerName">Add-Ons</Label>
					<div className="grid grid-cols-2 gap-4">
						<div className="flex gap-2">
							<CheckboxField id="vegan" name="vegan" control={control} />
							<label
								htmlFor="Vegan"
								className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
								Vegan
							</label>
						</div>
					</div>
					<Button type="submit" className="w-full">
						Create Order
					</Button>
					<Button variant="outline" className="w-full">
						Cancel
					</Button>
				</form>
			</CardContent>
		</Card>
	);
}
