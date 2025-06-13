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
	const [searchInput, setSearchInput] = useState("");
	const { useAllBlogPosts } = useBlog();
	const { blogPosts, isLoading, error } = useAllBlogPosts();
	
	// Filter blogspost based on author or search input
	const filteredBlogPosts = useMemo(() => {
		if (!blogPosts) return [];
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
				{isLoading ? (
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
