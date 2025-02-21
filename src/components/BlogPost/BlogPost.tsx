import { useParams } from "react-router-dom";
import useBlog from "../../hooks/useBlog";
import React from "react";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { BlogPostType } from "../../types/types";
import Button from "../Button/Button";
import style from "./BlogPost.module.css";

// Page to fetch and render single blogpost
// TODO: Clean up fetch (renders unnececary?)
const BlogPost = () => {
	const [blogPost, setBlogPost] = React.useState<null | BlogPostType>(null);
	const { getSingleBlogPost, loading } = useBlog();
	const params = useParams();

	React.useEffect(() => {
		const handleGetSingleBlogPost = async () => {
			if (!params.id) return;

			try {
				const currentBlogpost: BlogPostType = await getSingleBlogPost(
					Number(params.id)
				);
				setBlogPost(currentBlogpost);
			} catch (error) {
				console.log("Error fetching blog: ", error);
			}
		};

		handleGetSingleBlogPost();
	}, [params.id, getSingleBlogPost]);

	console.log(blogPost);

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

	return (
		<>
			<h1 className={style.blogPostHeading}>{blogPost.title}</h1>
			<div className={style.blogPost__AuthorDateWrapper}>
				<span>{blogPost.author}</span>
				<span>{blogPost.date}</span>
			</div>
			<img src={imagePath} alt={blogPost.title} className={style.blogPost__image}></img>
			<p className={style.blogPost__content}>{blogPost.content}</p>
		</>
	);
};

export default BlogPost;
