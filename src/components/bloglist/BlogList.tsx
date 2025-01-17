import React, { useEffect } from "react";
import BlogListItem from "../blogListItem/BlogListItem";
import blogPosts from "../../assets/data.ts";
import style from "./BlogList.module.css";
const BlogList = () => {
	// const { blogPosts } = useBlog();

	// useEffect(() => {
	// 	getBlogList();
	// }, [getBlogList]);

	return (
		<ul className={style.blogList}>
			{blogPosts.map((blogPost) => (
				<BlogListItem key={blogPost.id} blogPost={blogPost} />
			))}
		</ul>
	);
};

export default BlogList;
