import { cookies } from "next/headers";

const Dashboard = () => {
	const cookieStore = cookies();
	const token = cookieStore.get("token");

	console.log("COOKIE", token);

	return <div>Dashboard</div>;
};

export default Dashboard;
