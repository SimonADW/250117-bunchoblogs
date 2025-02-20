import { useParams } from "react-router-dom";

const BlogPost = () => {
	const params = useParams();

	return (
		<>
			<div>Blogpost id: {params.id} </div>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
				inventore nisi sapiente!
			</p>
		</>
	);
};

export default BlogPost;
