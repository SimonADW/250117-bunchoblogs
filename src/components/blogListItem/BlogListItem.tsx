import style from "./BlogListItem.module.css";
import { TfiPencil } from "react-icons/tfi";
import type { BlogPostType } from "../../types/types";
import { Link } from "react-router-dom";
import parse from 'html-react-parser';

type BlogPostProps = {
	blogPost: BlogPostType;
};

// Blog list item, anchor-link to the respective blog-page
const BlogListItem = ({ blogPost }: BlogPostProps) => {
	const imagePath = `http://localhost:3000/static/images/${blogPost.imageUrl}`;

	// Format date
	const date = new Date(blogPost.date);
	const formattedDate = date.toLocaleDateString("en-US", {year: "numeric", month: "long", day: "numeric"});

	// Parse blogpost content from HTML
	const parsedBlogContent = parse(blogPost.content.toString());


	return (
		<Link to={`/blogs/${blogPost.id}`} className={style.blogListItem}>
			<div className={style.blogListItem__contentWrapper}>
				<h2>{blogPost.title}</h2>
				<p className={style.blogContent}>{parsedBlogContent}</p>
				<div className={style.dateAndAuthorWrapper}>
					<span>{formattedDate}</span>
					<div className={style.author}>
						<TfiPencil />
						<span>{blogPost.author}</span>
					</div>
				</div>
			</div>
			<img src={imagePath} alt={blogPost.title} />
		</Link>
	);
};

export default BlogListItem;