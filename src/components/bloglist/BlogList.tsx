import { useEffect, useMemo, useState } from "react";
import BlogListItem from "../BlogListItem/BlogListItem.tsx";
import style from "./BlogList.module.css";
import useBlog from "../../hooks/useBlog.ts";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner.tsx";
import SearchBar from "../SearchBar/SearchBar.tsx";

const BlogList = () => {
	const { getBlogPosts, blogPosts, loading } = useBlog();
	const [searchInput, setSearchInput] = useState("");

	console.log("Bloglist rendered");

	useEffect(() => {
		getBlogPosts();
	}, [getBlogPosts]);

	const filteredBlogPosts = useMemo(() => {
		return blogPosts.filter((post) =>
			post.title.toLowerCase().includes(searchInput)
		);
	}, [searchInput, blogPosts]);

	return (
		<>
			<div className={style.blogListwrapper}>
				<SearchBar
					searchInput={searchInput}
					setSearchInput={setSearchInput}
					numberOfReults={filteredBlogPosts.length}
				/>
				{loading ? (
					<LoadingSpinner />
				) : (
					<ul className={style.blogList}>
						{filteredBlogPosts.map((blogPost) => (
							<BlogListItem
								key={blogPost.id}
								blogPost={blogPost}
							/>
						))}
					</ul>
				)}
			</div>
		</>
	);
};

export default BlogList;
