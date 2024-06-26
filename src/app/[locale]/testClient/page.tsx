import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

export default function TestClient() {
	return (
		<Card className="mx-auto max-w-sm">
			<CardHeader>
				<CardTitle className="text-xl">Create Order</CardTitle>
				<CardDescription>Create testing order</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="grid gap-4">
					<div className="grid gap-2">
						<Label htmlFor="menu">Menu</Label>
						<Input id="menu" type="text" placeholder="Pad Kra Pao" required />
					</div>
					<div className="grid gap-2">
						<Label htmlFor="customerName">Customer Name</Label>
						<Input
							id="customerName"
							type="text"
							placeholder="Damian"
							required
						/>
					</div>
					<Label htmlFor="customerName">Add-Ons</Label>
					<div className="grid grid-cols-2 gap-4">
						<div className="flex gap-2">
							<Checkbox id="soup" />
							<label
								htmlFor="soup"
								className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
								Soup
							</label>
						</div>
						<div className="flex gap-2">
							<Checkbox id="vegetables" />
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
				</div>
			</CardContent>
		</Card>
	);
}
