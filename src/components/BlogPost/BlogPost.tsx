import { useParams } from "react-router-dom";
import useBlog from "../../hooks/useBlog";
import React, { useEffect, useState } from "react";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { BlogPostType } from "../../types/types";
import Button from "../Button/Button";
import style from "./BlogPost.module.css";

// Page to fetch and render single blogpost
// TODO: Clean up fetch (renders unnececary?)
const BlogPost = () => {
	const [blogPost, setBlogPost] = useState<null | BlogPostType>(null);
	const { getSingleBlogPost, loading } = useBlog();
	const params = useParams();

	useEffect(() => {
		const handleGetSingleBlogPost = async () => {
			if (!params.id) return;

			try {
				const currentBlogpost: BlogPostType = await getSingleBlogPost(
					params.id
				);
				setBlogPost(currentBlogpost);
			} catch (error) {
				console.log("Error fetching blog: ", error);
			}
		};

		handleGetSingleBlogPost();
	}, [params.id, getSingleBlogPost]);

	

	let imagePath;
	if (blogPost) {
		imagePath = `http://localhost:3000/static/images/${blogPost.id}-${blogPost.imageUrl}`;
	}

	if (loading) return <LoadingSpinner />;
	if (!blogPost)
		return (
			<p>
				Sorry, we cannot find the blog post, please try to strike gold
				again from <Button href="/blogs">here</Button>
			</p>
		);

	// Format date
	const date = new Date(blogPost.date);
	const formattedDate = date.toLocaleDateString("en-US", {year: "numeric", month: "long", day: "numeric"});

	return (
		<>
			<h1 className={style.blogPostHeading}>{blogPost.title}</h1>
			<div className={style.blogPost__AuthorDateWrapper}>
				<span className={style.blogPost__author}>{blogPost.author}</span>
				<span>{formattedDate}</span>
			</div>
			<img src={imagePath} alt={blogPost.title} className={style.blogPost__image}></img>
			<p className={style.blogPost__content}>{blogPost.content}</p>
		</>
	);
};

export default BlogPost;
