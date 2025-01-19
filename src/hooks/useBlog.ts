import React, { useState } from "react";
import { BlogPost } from "../types/types";

const useBlog = ()=> {	
	const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
	const [loading, setLoading] = useState(false);

	const getBlogPosts = React.useCallback(async () => {
		setLoading(true);		
		try {
			const response = await fetch("http://localhost:3000/");
			const data = await response.json();			
			setBlogPosts(data);			
			console.log("Blog list fetched: ", data);
			
		} catch (error) {
			console.error("Error fetching blog list: ", error);			
		} finally {
			setLoading(false);
		}
	}, []);
	
	const postBlogPost = async () => {
		console.log("Posting blog post...");
	}

	const deleteBlogPost = async () => {
		console.log("Deleting blog post...");
	}

	return { blogPosts, getBlogPosts, postBlogPost, deleteBlogPost, loading };	
}

export default useBlog;