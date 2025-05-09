import { useState } from "react";
import AddBlogpostForm from "../components/AddBlogpostForm/AddBlogpostForm";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import useBlog from "../hooks/useBlog";
import { Link } from "react-router-dom";
import Button from "../components/Button/Button";

type AddblogpostPropTypes = {
	userName: string;
};

const AddBlogpost = ({ userName }: AddblogpostPropTypes) => {
	const { loading } = useBlog();
	const [newBlogPostLink, setNewBlogPostLink] = useState<string | null>(null);

	if (loading) return <LoadingSpinner />;
	if (newBlogPostLink)
		return (
			<h2
				style={{
					fontSize: "36px",
					color: "var(--secondary-color)",
					fontFamily: "georgia",
				}}
			>
				Congrats on your new post! Check it out{" "}
				<Link to={`${newBlogPostLink}`}>
					<Button>HERE</Button>
				</Link>
			</h2>
		);

	return (
		<>
			<h2
				style={{
					fontSize: "36px",
					color: "var(--secondary-color)",
					fontFamily: "georgia",
				}}
			>
				New blogpost in the making...?
			</h2>
			<AddBlogpostForm
				userName={userName}
				setNewBlogPostLink={setNewBlogPostLink}
			/>
		</>
	);
};

export default AddBlogpost;
