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
import { type FormValues } from "@/types/form";
import { CheckboxField } from "@/components/formInputs/CheckboxField";
import { createOrder } from "@/services/orders";

export default function TestClient() {
	const { handleSubmit, control } = useForm<FormValues>({
		defaultValues: {
			customerName: "",
			menu: "",
			soup: false,
			vege: false
		}
	});
	const onSubmit: SubmitHandler<FormValues> = async (data) => {
		const currentDate = new Date().toISOString();
		try {
			const _id: string = crypto.randomUUID();

			const createdOrder = await createOrder({
				_id,
				customerName: data.customerName,
				menuName: data.menu,
				vege: data.vege,
				soup: data.soup,
				orderCompleted: false,
				createdAt: currentDate
			});
			console.log("Order created successfully:", createdOrder);
		} catch (error) {
			console.error("Failed to create order:");
		}
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
						<Label htmlFor="menu">Menu</Label>
						<TextField
							control={control}
							name="menu"
							id="menu"
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
							<CheckboxField id="soup" name="soup" control={control} />
							<label
								htmlFor="soup"
								className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
								Soup
							</label>
						</div>
						<div className="flex gap-2">
							<CheckboxField id="vege" name="vege" control={control} />
							<label
								htmlFor="vegetables"
								className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
								Vegetables
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
