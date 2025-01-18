import { useEffect, useState } from "react";
import BlogListItem from "../blogListItem/BlogListItem.tsx";
import style from "./BlogList.module.css";
import useBlog from "../../hooks/useBlog.ts";
import { BlogPost } from "../../types/types.ts";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner.tsx";
import SearchBar from "../searchBar/SearchBar.tsx";

const BlogList = () => {
	const { getBlogPosts } = useBlog();
	const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
	const [loading, setLoading] = useState(false);
	const [searchInput, setSearchInput] = useState("");
	const [filteredBlogPosts, setFilteredBlogPosts] = useState<BlogPost[]>([]);

	useEffect(() => {
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

	useEffect(() => {
		setFilteredBlogPosts(
			blogPosts.filter((post) =>
				post.title.toLowerCase().includes(searchInput)
			)
		);
	}, [searchInput, blogPosts]);

	return (
		<>
			<SearchBar
				blogPosts={blogPosts}
				searchInput={searchInput}
				setSearchInput={setSearchInput}
				numberOfReults={filteredBlogPosts.length}				
			/>
			{loading ? (
				<LoadingSpinner />
			) : (
				<ul className={style.blogList}>
					{filteredBlogPosts.map((blogPost) => (
						<BlogListItem key={blogPost.id} blogPost={blogPost} />
					))}
				</ul>
			)}
		</>
	);
};

export default BlogList;
