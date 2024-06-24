import { ThemeToggle } from "./ThemeToggle";
import { Button } from "./ui/button";

const Navbar = () => {
	return (
		<nav className="bg-secondary flex justify-end border-[1px] border-b-gray-600 p-3">
			<ThemeToggle />
			<Button>Login</Button>
		</nav>
	);
};

export default Navbar;
