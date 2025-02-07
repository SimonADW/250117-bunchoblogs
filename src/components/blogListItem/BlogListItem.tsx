import style from "./BlogListItem.module.css";
import { TfiPencil } from "react-icons/tfi";
import type { BlogPost } from "../../types/types";

type BlogPostProps = {
	blogPost: BlogPost;
};

const BlogListItem = ({ blogPost }: BlogPostProps) => {
	const imagePath = `http://localhost:3000/static/images/${blogPost.id}-${blogPost.imageUrl}`;

	return (
		<article className={style.blogListItem}>
			<div className={style.blogListItem__contentWrapper}>
				<h2>{blogPost.title}</h2>
				<p className={style.blogContent}>{blogPost.content}</p>
				<div className={style.dateAndAuthorWrapper}>
					<span>{blogPost.date}</span>
					<div className={style.author}>
						<TfiPencil />
						<span>{blogPost.author}</span>
					</div>
				</div>
			</div>
			<img src={imagePath} alt={blogPost.title} />
		</article>
	);
};

export default BlogListItem;
