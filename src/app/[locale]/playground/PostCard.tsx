const PostCard = (props: { title: string; body: string }) => {
	return (
		<div className="flex flex-col divide-y-2 divide-solid divide-slate-300 p-10 ">
			<h1 className="bg-slate-700 p-3 text-lg font-extrabold">{props.title}</h1>
			<p className="p-3">{props.body}</p>
		</div>
	);
};

export default PostCard;
