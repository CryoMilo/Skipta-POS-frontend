import { ThemeToggle } from "./ThemeToggle";
import { Button } from "./ui/button";

const Navbar = () => {
	return (
		<nav className="flex justify-end p-3">
			<ThemeToggle />
			<Button>Login</Button>
		</nav>
	);
};

export default Navbar;
