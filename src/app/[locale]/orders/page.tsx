import { Order } from "@/types/orders";
import Image from "next/image";
import Link from "next/link";
import { getOrderList } from "@/services/orders";

const NoOrderNotice = () => (
	<div className="grid h-full w-full place-content-center">
		<div className="flex flex-col items-center gap-2">
			<Link href="/products">
				<Image
					src="/images/add-to-cart.png"
					alt="No Order"
					width={80}
					height={80}
				/>
			</Link>
			<p className="pl-3">Click to Order</p>
		</div>
	</div>
);

const Orders = async () => {
	const data = await getOrderList();
	const orders: Order[] = data;

	console.log(orders);

	return (
		<>
			<h1 className="text-title">Orders</h1>
			<div className="grid gap-5 md:grid-cols-[1fr_30%]">
				<section className="h-[50vh] w-full rounded-md bg-accent p-5 md:h-[100vh]">
					{/* {orders.length !== 0 ? (
						<OrderCard orders={orders} />
					) : (
						<NoOrderNotice />
					)} */}
					<NoOrderNotice />
				</section>
				<section className="h-fit w-full rounded-md bg-primary p-5 text-secondary">
					Henlo
				</section>
			</div>
		</>
	);
};

export default Orders;
