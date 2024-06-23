import Image from "next/image";

const Sidebar = () => {
	return (
		<div className="bg-secondary-foreground h-full w-32">
			<Image
				width={60}
				height={60}
				src="/icons/SkiptaLogo.svg"
				alt="main logo"
			/>
		</div>
	);
};

export default Sidebar;
