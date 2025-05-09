import { useForm, SubmitHandler, Controller } from "react-hook-form";
import style from "./AddBlogpostForm.module.css";
import TextEditor from "../TextEditor/TextEditor";
import useBlog from "../../hooks/useBlog";
import { uploadImage } from "../../utils/uploadImage";

type Inputs = {
	title: string;
	author: string;
	content: string;
	tags: string;
	image: FileList;
};

type AddblogpostformPropTypes = {
	userName: string;
};

const AddBlogpostForm = ({ userName }: AddblogpostformPropTypes) => {
	const { postBlogPost } = useBlog();
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<Inputs>();

	// Submit handler function
	const onSubmit: SubmitHandler<Inputs> = async (data) => {
		// Create array from tags
		const tagsArray = data.tags.split(",");

		// Upload image
		let imageUrl = "";
		if (data.image?.[0]) {
			try {
				imageUrl = await uploadImage(data.image[0]);
			} catch (error) {
				console.error("Image upload failed:", error);
				return;
			}
		}

		// Add id, userName and date to blog data
		const blogPostData = {
			...data,
			id: crypto.randomUUID(),
			tags: tagsArray,
			date: Date.now(),
			userName,
			imageUrl, // ImageUrl from the uploadImage function
		};

		// Post blogpost data to server
		postBlogPost(blogPostData);

		// TODO: Display confirmation

	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className={style.addBlogpostForm}
			encType="multipart/form-data" // Required for file uploads
		>
			<h2>
				Share the <span>magic</span> here
			</h2>

			<label htmlFor="title">Title</label>
			<input
				id="title"
				placeholder="Enter a catchy blog title..."
				{...register("title", { required: true })}
			/>
			{errors.title && <span>This field is required</span>}

			<label htmlFor="author">Author</label>
			<input
				id="author"
				placeholder="Your name or pen name"
				{...register("author", { required: true })}
			/>
			{errors.author && <span>This field is required</span>}

			<label htmlFor="content">Content</label>
			{/* React-Quill in TextEditor, wrapped in Controller to handle text-editing */}
			<Controller
				name="content"
				control={control}
				rules={{ required: true }}
				render={({ field }) => (
					<TextEditor
						value={field.value}
						onChange={field.onChange}
						placeholderText="Blog away!"
					/>
				)}
			/>
			{errors.content && <span>This field is required</span>}

			<label htmlFor="tags">Tags</label>
			<input
				id="tags"
				placeholder="Add tags separated by commas"
				{...register("tags")}
			/>
			{errors.tags && <span>This field is required</span>}

			<label htmlFor="image">Upload an image</label>
			<input
				type="file"
				id="image"
				accept="image/*"
				{...register("image", { required: true })}
			/>
			{errors.image && <span>An image is required</span>}

			<button className={style.blogFormSubmitButton} type="submit">
				Submit new post
			</button>
		</form>
	);
};

export default AddBlogpostForm;
