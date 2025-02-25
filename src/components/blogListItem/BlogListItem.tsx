import style from "./BlogListItem.module.css";
import { TfiPencil } from "react-icons/tfi";
import type { BlogPostType } from "../../types/types";

type BlogPostProps = {
	blogPost: BlogPostType;
};

// Blog list item, anchor-link to the respective blog-page
const BlogListItem = ({ blogPost }: BlogPostProps) => {
	const imagePath = `http://localhost:3000/static/images/${blogPost.id}-${blogPost.imageUrl}`;

	
	const date = new Date(blogPost.date);
	const formattedDate = date.toLocaleDateString("en-US", {year: "numeric", month: "long", day: "numeric"});

	return (
		<a href={`/blogs/${blogPost.id}`} className={style.blogListItem}>
			<div className={style.blogListItem__contentWrapper}>
				<h2>{blogPost.title}</h2>
				<p className={style.blogContent}>{blogPost.content}</p>
				<div className={style.dateAndAuthorWrapper}>
					<span>{formattedDate}</span>
					<div className={style.author}>
						<TfiPencil />
						<span>{blogPost.author}</span>
					</div>
				</div>
			</div>
			<img src={imagePath} alt={blogPost.title} />
		</a>
	);
};

export default BlogListItem;
