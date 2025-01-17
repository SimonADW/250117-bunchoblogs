import React, { useEffect } from "react";
import BlogListItem from "../blogListItem/BlogListItem";
import blogPosts from "../../assets/data.ts";
import style from "./BlogList.module.css";
import useBlog from "../../hooks/useBlog.ts";

const BlogList = () => {
	const { getBlogPosts } = useBlog();

	useEffect(() => {
		getBlogPosts();
	}, [getBlogPosts]);

	return (
		<ul className={style.blogList}>
			{blogPosts.map((blogPost) => (
				<BlogListItem key={blogPost.id} blogPost={blogPost} />
			))}
		</ul>
	);
};

export default BlogList;
