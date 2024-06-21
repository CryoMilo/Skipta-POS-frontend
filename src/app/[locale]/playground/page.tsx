// import PostList from "./PostList";
import SocketTest from "./SocketTest";

const Playground = () => {
	// let a: number = 1;

	// let names: (string | number)[];

	// names = ["Hi", "Hello", 2, 4];

	// //OBJECTS
	// let user = {
	// 	username: "Damian",
	// 	age: 22,
	// 	isAdmin: false
	// };

	// user.username = "Hommie";

	// let userObj: {
	// 	username: string;
	// 	age: number;
	// 	isAdmin: boolean;
	// 	phone?: string;
	// };

	// userObj = {
	// 	username: "3",
	// 	age: 44,
	// 	isAdmin: true
	// };

	// //FUNCTION
	// //no return
	// const sayHi = (name: string, job?: string): void => {
	// 	console.log("Hi ", name);
	// 	job && console.log("Are you", job, "?");
	// };

	// sayHi("John", "Surgeon");

	// //with return
	// const sayHello = (): string => {
	// 	return "String";
	// };

	// //Function with Object Parameters
	// const getProfile = (profile: {
	// 	username: string;
	// 	age: number;
	// 	phone?: string;
	// }): string => {
	// 	return `Her name is ${profile.username}, ${profile.age} years old`;
	// };

	// const profile = { username: "Lila", age: 3, phone: "45464646" };

	// // USING TYPE ALAIS
	// type UserProfile = {
	// 	username: string;
	// 	age: number;
	// 	phone?: string;
	// };

	// let profileFunction = (user: UserProfile) => {
	// 	console.log(user.age);
	// };

	// type myFunc = (a: number, b: number) => number;

	// const getSum: myFunc = (a, b) => {
	// 	return a + b;
	// };

	return (
		<div className="">
			<nav className="flex justify-end gap-6 bg-slate-400 px-10 py-5">
				<p>Home</p>
				<p>About</p>
				<p>Contact Us</p>
			</nav>

			<div className="p-10">
				{/* <PostList /> */}
				<SocketTest />
			</div>
		</div>
	);
};

export default Playground;
