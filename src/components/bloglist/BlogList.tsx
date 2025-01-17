import React from "react";
import BlogListItem from "../blogListItem/BlogListItem.tsx";
import style from "./BlogList.module.css";
import useBlog from "../../hooks/useBlog.ts";
import { BlogPost } from "../../types/types.ts";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner.tsx";

const BlogList = () => {
	const { getBlogPosts } = useBlog();
	const [blogPosts, setBlogPosts] = React.useState<BlogPost[]>([]);
	const [loading, setLoading] = React.useState(false);

	React.useEffect(() => {
		setLoading(true);
		try {
			const fetchBlogPosts = async () => {
				const posts = await getBlogPosts();
				setBlogPosts(posts);
				setLoading(false);
			};

			fetchBlogPosts();
		} catch (error) {
			console.error("Error fetching blog list: ", error);
			setLoading(false);
		}
	}, [getBlogPosts]);

	// TODO: Remove log
	console.log("Rendered list");

	return (
		<>
			{loading ? (
				<LoadingSpinner />
			) : (
				<ul className={style.blogList}>
					{blogPosts.map((blogPost) => (
						<BlogListItem key={blogPost.id} blogPost={blogPost} />
					))}
				</ul>
			)}
		</>
	);
};

export default BlogList;
