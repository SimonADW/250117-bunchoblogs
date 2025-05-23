import { useState } from "react";
import AddBlogpostForm from "../components/AddBlogpostForm/AddBlogpostForm";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import useBlog from "../hooks/useBlog";
import { Link } from "react-router-dom";
import Button from "../components/Button/Button";

type AddblogpostPropTypes = {
	userEmail: string;
	authorId: string;
};

const AddBlogpost = ({ userEmail, authorId }: AddblogpostPropTypes) => {
	const { loading } = useBlog();
	const [newBlogPostLink, setNewBlogPostLink] = useState<string | null>(null);

	// Display loading spinner
	if (loading) return <LoadingSpinner />;
	
	// Display confirm message
	if (newBlogPostLink)
		return (
			<h2
				style={{                    
					fontSize: "36px",
					color: "var(--secondary-color)",
					fontFamily: "georgia",
          paddingTop: "40%",
          textAlign: "center",
				}}
			>
				Congrats on your new post! Check it out{" "}
        {/* Link to bloglist if no new post */}
				<Link to={newBlogPostLink ? `${newBlogPostLink}` : "/blogs"}>
					<Button>HERE</Button>
				</Link>
			</h2>
		);
	
	// Display form (Default)
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
				userEmail={userEmail}
				authorId={authorId}
				setNewBlogPostLink={setNewBlogPostLink}
			/>
		</>
	);
};

export default AddBlogpost;