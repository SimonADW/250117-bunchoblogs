import { useState, useCallback } from "react";
import useSWR, { mutate as globalMutate } from "swr";
import { BlogPostType } from "../types/types";

const fetcher = (url: string) => fetch(url).then(res => {
	if (!res.ok) throw new Error(`HTTP Error, status: ${res.status}`);
	return res.json();
});

// Hook for all blog posts
function useAllBlogPosts() {
	const { data: blogPosts, isLoading, error } = useSWR<BlogPostType[]>(
		"http://localhost:3000/",
		fetcher,
		{ revalidateOnMount: true, revalidateOnFocus: false }
	);
	return { blogPosts, isLoading, error };
}

// Hook for a single blog post
function useSingleBlogPost(id: string | null) {
	const shouldFetch = id ? `http://localhost:3000/blogs/${id}` : null;
	const { data: singleBlogPost, isLoading, error } = useSWR<BlogPostType>(shouldFetch, fetcher);
	return { singleBlogPost, isLoading, error }
}

// Mutations (post and delete, etc)
function useBlogMutations() {
	const [loading, setLoading] = useState(false);

	const postBlogPost = async (newBlog: BlogPostType) => {
		setLoading(true);
		try {
			const response = await fetch("http://localhost:3000/blogs/add-post", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(newBlog),
			});
			if (!response.ok) throw new Error(`HTTP Error, status: ${response.status}`);
			const data = await response.json();

			// Revalidate and update the cached list of blog posts
			globalMutate("http://localhost:3000/");
			return data;
		} finally {
			setLoading(false);
		}
	};

	const deleteBlogPost = async (id: string) => {
		setLoading(true);
		try {
			const response = await fetch(`http://localhost:3000/blogs/${id}`, {
				method: "DELETE",
			});
			if (!response.ok) throw new Error(`HTTP Error, status: ${response.status}`);
			
			// Revalidate and update the cached list of blog posts
			globalMutate("http://localhost:3000/");
		} finally {
			setLoading(false);
		}
	};

	return { postBlogPost, deleteBlogPost, loading };
}

// Main hook to export
function useBlog() {
	return {
		useAllBlogPosts,
		useSingleBlogPost,
		useBlogMutations,
	};
}

export default useBlog;