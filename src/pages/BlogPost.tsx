import { useParams } from "react-router-dom";
import useBlog from "../hooks/useBlog";
import React from "react";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import { BlogPostType } from "../types/types";


const BlogPost = () => {
	const params = useParams();
	const { getSingleBlogPost, loading } = useBlog();
	const [blogPost, setBlogPost] = React.useState<null | BlogPostType>(null);

  const handleGetSingleBlogPost = async () => {    
    const currentBlogpost: BlogPostType = await getSingleBlogPost(Number(params.id));
    setBlogPost(currentBlogpost);
  }

	React.useEffect(()=> {
    handleGetSingleBlogPost()
  }, [params.id]);

  console.log(blogPost);
  

	if (!blogPost || loading) {
		return <LoadingSpinner />;
	}

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
