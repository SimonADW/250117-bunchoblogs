import { useParams } from "react-router-dom";
import useBlog from "../../hooks/useBlog";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import Button from "../Button/Button";
import style from "./BlogPost.module.css";
import parse from 'html-react-parser';
import { ChevronLeft } from "react-feather";
	
// Page to fetch and render single blogpost
const BlogPost = () => {
	const { useSingleBlogPost } = useBlog();
	const params = useParams();

	if(!params.id) throw new Error("Unable to retrieve id from URL Params");
	const {  singleBlogPost: blogPost, isLoading } = useSingleBlogPost(params.id);
	
		// Get image path
	let imagePath;
	if (blogPost) {
		imagePath = `http://localhost:3000/static/images/${blogPost.imageUrl}`;
	}

	// Loading spinner
	if (isLoading) return <LoadingSpinner />;
	
	// User feedback when error
	if (!blogPost)
		return (
			<p className={style.errorFindingBlogpost}>
				Sorry, we cannot find the blog post, please try to strike gold
				again from <Button href="/blogs">here</Button>
			</p>
		);

	// Parse blogpost content from HTML
	blogPost.content = parse(blogPost.content.toString());

	// Format date
	const date = new Date(blogPost.date);
	const formattedDate = date.toLocaleDateString("en-US", {year: "numeric", month: "long", day: "numeric"});
	
	return (
		<>
			{/* Back button */}
			<button className={style.backButton} onClick={()=> window.history.back()} >
				<ChevronLeft color="var(--secondary-color)" size={"3rem"}/>
			</button>

			{/* Blogpost */}
			<h1 className={style.blogPostHeading}>{blogPost.title}</h1>
			<div className={style.blogPost__AuthorDateWrapper}>
				<span className={style.blogPost__author}>{blogPost.author}</span>
				<span>{formattedDate}</span>
			</div>
			<img src={imagePath} alt={blogPost.title} className={style.blogPost__image}></img>
			<div className={style.blogPost__content}>{blogPost.content}</div>
		</>
	);
};

export default BlogPost;
