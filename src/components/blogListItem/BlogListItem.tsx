import React from "react";
import style from "./BlogListItem.module.css";
import { TfiPencil } from "react-icons/tfi";

const blogPost = {
	id: 1,
	title: "The Evolution of Jazz",
	author: "John Doe",
	date: "2023-10-01",
	content:
		"Jazz has evolved significantly since its inception in the early 20th century. From the early days of Dixieland to the modern sounds of fusion, jazz continues to innovate and inspire. The genre has seen numerous influential artists such as Louis Armstrong, Duke Ellington, and Miles Davis, each contributing to its rich history. Today, jazz incorporates elements from various musical styles, making it a dynamic and ever-changing genre.",
	tags: ["Jazz", "Music History", "Genres"],
	imageUrl: "https://example.com/images/jazz.jpg",
};

const BlogListItem = () => {
	return (
		<article className={style.blogListItem}>
			<h2>{blogPost.title}</h2>
			<p className={style.blogContent}>{blogPost.content}</p>
	 		<div className={style.dateAndAuthorWrapper}>
				<span>{blogPost.date}</span>
				<div className={style.author}>
					<TfiPencil />
					<span>{blogPost.author}</span>
				</div>
			</div>
		</article>
	);
};

export default BlogListItem;
