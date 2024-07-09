import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
} from "@/components/ui/card";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow
} from "@/components/ui/table";
import { Order } from "@/types/orders";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getOrderList, setOrderCompletion } from "@/services/orders";
import { revalidateOrders } from "../actions";
import { Button } from "@/components/ui/button";

interface OrderTableRowProps {
	order: Order;
}

const OrderTableRow: React.FC<OrderTableRowProps> = ({ order }) => {
	async function updateCompletion() {
		"use server";

		await setOrderCompletion(order._id, order);
		await revalidateOrders();
	}

	return (
		<TableRow>
			<TableCell className="font-medium">
				<Avatar>
					<AvatarImage src="https://github.com/shadcn.png" />
					<AvatarFallback>V</AvatarFallback>
				</Avatar>
			</TableCell>
			<TableCell className="font-medium">{order.menuName}</TableCell>
			<TableCell>{order.customerName}</TableCell>
			<TableCell>
				<Badge variant="outline">{order.vege ? "Yes" : "No"}</Badge>
			</TableCell>
			<TableCell>
				<Badge variant="outline">{order.soup ? "Yes" : "No"}</Badge>
			</TableCell>
			<TableCell className="hidden md:table-cell">
				{new Date(order.createdAt).toLocaleString()}
			</TableCell>
			<TableCell>{order.orderCompleted ? "Completed" : "Pending"}</TableCell>
			<TableCell>
				{order.orderCompleted ? (
					""
				) : (
					<form action={updateCompletion}>
						<Button type="submit">Completed</Button>
					</form>
				)}
			</TableCell>
		</TableRow>
	);
};

export const OrderTable = async () => {
	const data = await getOrderList();

	const orders: Order[] = data;

	return (
		<Card>
			<CardHeader>
				<CardTitle>Orders</CardTitle>
				<CardDescription>
					There are currently {orders.length || 0} orders
				</CardDescription>
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
							<TableHead className="hidden md:table-cell">Status</TableHead>
							<TableHead>
								<span className="sr-only">Order Completed</span>
							</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{orders.map((order: Order) => (
							<OrderTableRow key={order._id} order={order} />
						))}
					</TableBody>
				</Table>
			</CardContent>
			<CardFooter>
				<div className="text-xs text-muted-foreground">
					Showing <strong>1-10</strong> of <strong>32</strong> products
				</div>
			</CardFooter>
		</Card>
	);
};
