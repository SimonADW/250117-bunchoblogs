import React, { useState } from "react";
import { BlogPost } from "../types/types";

const useBlog = ()=> {	
	const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
	const [loading, setLoading] = useState(false);

	// FETCH ALL BLOGSPOSTS
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

	// FETCH SINGLE BLOGPOST
	const getSingleBlogPost = React.useCallback(async (id: number)=> {
		setLoading(true);	
		try {
			const response = await fetch(`http://localhost:3000/blogs/${id}`);
			
			if (!response.ok) {
				throw new Error(`HTTP Error, status: ${response.status}`);
			}
			
			return await response.json();			
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
		
	const postBlogPost = async () => {
		console.log("Posting blog post...");
	}

	const deleteBlogPost = async () => {
		console.log("Deleting blog post...");
	}

	return { blogPosts, getBlogPosts, postBlogPost, deleteBlogPost, getSingleBlogPost, loading };	
}

export default useBlog;