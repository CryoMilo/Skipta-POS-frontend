import PostCard from "./PostCard";
import { Article } from "./types";

const PostList = async () => {
	const res = await fetch("https://jsonplaceholder.typicode.com/posts");

	if (!res.ok) {
		throw new Error("Failed To Fetch Data");
	}

	const articles = await res.json();

	return (
		<div className="grid grid-cols-2">
			{articles.map((article: Article) => (
				<PostCard key={article.id} title={article.title} body={article.body} />
			))}
		</div>
	);
};

export default PostList;
