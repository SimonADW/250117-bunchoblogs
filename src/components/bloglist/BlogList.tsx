import { useEffect, useMemo, useState } from "react";
import BlogListItem from "../BlogListItem/BlogListItem.tsx";
import style from "./BlogList.module.css";
import useBlog from "../../hooks/useBlog.ts";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner.tsx";
import SearchBar from "../SearchBar/SearchBar.tsx";

type BlogListPropsType = {
	author?: string;
};

const BlogList = ({ author }: BlogListPropsType) => {
	const { getBlogPosts, blogPosts, loading } = useBlog();
	const [searchInput, setSearchInput] = useState("");
	
	useEffect(() => {
		getBlogPosts();
	}, [getBlogPosts]);

	// Filter blogspost based on author or search input
	const filteredBlogPosts = useMemo(() => {
		return blogPosts
			.filter((post) => author ? post.authorId === author : post) // If author prop is present sort only my posts
			.filter((post) => post.title.toLowerCase().includes(searchInput)  // Filter from searchInput
		);
	}, [author, searchInput, blogPosts]);

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
