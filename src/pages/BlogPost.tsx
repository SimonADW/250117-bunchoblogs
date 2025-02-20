import { useParams } from "react-router-dom";
import useBlog from "../hooks/useBlog";
import React from "react";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import { BlogPostType } from "../types/types";
import Button from "../components/Button/Button";

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

	if (loading) return <LoadingSpinner />;
	if (!blogPost) return <p>Sorry, we cannot find the blog post, please try to strike gold again from <Button href="/blogs">here</Button></p>;
	return (
		<>
			<div>
				<h1>{blogPost.title}</h1>
				<p>{blogPost.content}</p>
				<div>
					<span>{blogPost.date}</span>
					<div>
						<span>{blogPost.author}</span>
					</div>
				</div>
				<img src={blogPost.imageUrl} alt={blogPost.title} />
			</div>
		</>
	);
};

export default BlogPost;
