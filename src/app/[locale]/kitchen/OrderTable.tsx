import { MoreHorizontal } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
} from "@/components/ui/card";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow
} from "@/components/ui/table";
import { Order } from "@/types/orders";

const orders: Order[] = [
	{
		id: "6659994f805c76ed0da2d137",
		customerName: "Damian",
		menuName: "Si Chet",
		vege: true,
		soup: false,
		orderCompleted: false,
		createdAt: "2024-05-31T09:33:03.289Z"
	}
	// Add more orders as needed
];

const OrderTableRow = ({ order }: { order: Order }) => (
	<TableRow>
		<TableCell className="font-medium">{order.menuName}</TableCell>
		<TableCell>{order.customerName}</TableCell>
		<TableCell>
			<Badge variant="outline">
				{order.vege ? "Vegetarian" : "Non-Vegetarian"}
			</Badge>
		</TableCell>
		<TableCell>
			<Badge variant="outline">{order.soup ? "With Soup" : "No Soup"}</Badge>
		</TableCell>
		<TableCell>{order.orderCompleted ? "Completed" : "Pending"}</TableCell>
		<TableCell className="hidden md:table-cell">
			{new Date(order.createdAt).toLocaleString()}
		</TableCell>
		<TableCell>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button aria-haspopup="true" size="icon" variant="ghost">
						<MoreHorizontal className="h-4 w-4" />
						<span className="sr-only">Toggle menu</span>
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end">
					<DropdownMenuLabel>Actions</DropdownMenuLabel>
					<DropdownMenuItem>Edit</DropdownMenuItem>
					<DropdownMenuItem>Delete</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</TableCell>
	</TableRow>
);

export default function OrderTable() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Orders</CardTitle>
				<CardDescription>There are currently 500 orders</CardDescription>
			</CardHeader>
			<CardContent>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead className="hidden w-[100px] sm:table-cell">
								<span className="sr-only">Image</span>
							</TableHead>
							<TableHead>Menu</TableHead>
							<TableHead>Customer Name</TableHead>
							<TableHead className="hidden md:table-cell">Vegetables</TableHead>
							<TableHead className="hidden md:table-cell">Soup</TableHead>
							<TableHead className="hidden md:table-cell">Created at</TableHead>
							<TableHead>
								<span className="sr-only">Order Completed</span>
							</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{orders.map((order) => (
							<OrderTableRow key={order.id} order={order} />
						))}
					</TableBody>
				</Table>
			</CardContent>
			<CardFooter>
				<div className="text-muted-foreground text-xs">
					Showing <strong>1-10</strong> of <strong>32</strong> products
				</div>
			</CardFooter>
		</Card>
	);
}
