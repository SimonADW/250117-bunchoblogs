import React from "react";

const useBlog = ()=> {
	const getBlogPosts = React.useCallback(async () => {		
		try {
			const response = await fetch("http://localhost:3000/", {
				credentials: "include",
			});
			const data = await response.json();			
			return data;
		} catch (error) {
			console.error("Error fetching blog list: ", error);			
		}
	}, []);
	
	const postBlogPost = async () => {
		console.log("Posting blog post...");
	}

	const deleteBlogPost = async () => {
		console.log("Deleting blog post...");
	}

	return { getBlogPosts, postBlogPost, deleteBlogPost };	
}

export default useBlog;