const loader = () => {
	return (
		<div className="grid h-full w-full place-items-center">
			<div className="text-center">
				<div className="mx-auto h-16 w-16 border-spacing-4 animate-spin rounded-full border-4 border-dashed border-yellow-500"></div>
				<h2 className="mt-4 text-zinc-900 dark:text-white">Loading...</h2>
				<p className="text-zinc-600 dark:text-zinc-400">Preparing your Menu</p>
			</div>
		</div>
	);
};

export default loader;
