import React, { useState } from "react";
import { BlogPostType } from "../types/types";

const useBlog = ()=> {	
	const [blogPosts, setBlogPosts] = useState<BlogPostType[]>([]);
	const [loading, setLoading] = useState(false);

	// FETCH ALL BLOGSPOSTS
	const getBlogPosts = React.useCallback(async () => {
		setLoading(true);		
		try {
			const response = await fetch("http://localhost:3000/");
			
			if (!response.ok) {
				throw new Error(`HTTP Error, status: ${response.status}`);
			}
			
			const data = await response.json();			
			setBlogPosts(data);					
		} catch(error) {
			if(error instanceof Error) {
				throw new Error(error.message);
			} else {
				throw new Error("An unknown error has occurred");
			}
		} finally {
			setLoading(false);	
		}		
	}, []);

	// FETCH SINGLE BLOGPOST
	const getSingleBlogPost = React.useCallback(async (id: string): Promise<BlogPostType>=> {
		setLoading(true);	
		try {
			const response = await fetch(`http://localhost:3000/blogs/${id}`);
			
			if (!response.ok) {
				throw new Error(`HTTP Error, status: ${response.status}`);
			}
			
			const data = await response.json();						
			return data;
		} catch(error) {
			if(error instanceof Error) {
				throw new Error(error.message);
			} else {
				throw new Error("An unknown error has occurred");
			}
		} finally {
			setLoading(false);	
		}				
	}, [])
		
	// POST NEW BLOGPOST
	const postBlogPost = async (newBlog: BlogPostType) => {		
		setLoading(true);	
		
		try {
			const response = await fetch("http://localhost:3000/blogs/add-post", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(newBlog),
			});

			if (!response.ok) {
				throw new Error(`HTTP Error, status: ${response.status}`);
			}

			const data = await response.json();
			console.log("Blog post successfully posted:", data);
			return response.ok;
			
		} catch (error) {
			if (error instanceof Error) {
				throw new Error(error.message);
			} else {
				throw new Error("An unknown error has occurred");
			}
		} finally {
			setLoading(false);
		}

		
	}

	const deleteBlogPost = async () => {
		console.log("Deleting blog post...");
	}

	return { blogPosts, getBlogPosts, postBlogPost, deleteBlogPost, getSingleBlogPost, loading };	
}

export default useBlog;