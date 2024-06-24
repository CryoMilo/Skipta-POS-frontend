import Image from "next/image";

const Sidebar = () => {
	return (
		<div className="bg-secondary flex min-h-[100vh] w-[15%] items-start justify-center border-[1px] border-r-gray-600">
			<Image
				className="pt-4"
				width={80}
				height={80}
				src="/icons/SkiptaLogo.svg"
				alt="main logo"
			/>
		</div>
	);
};

export default Sidebar;
