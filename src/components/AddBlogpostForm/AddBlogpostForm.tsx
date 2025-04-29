import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import style from './AddBlogpostForm.module.css';
import TextEditor from '../TextEditor/TextEditor';


type Inputs = {
	  title: string;
	  author: string;	  
	  content: string;
	  tags: string;	  
};


const AddBlogpostForm = () => {
	const { register, handleSubmit, control, formState: { errors } } = useForm<Inputs>();
	const onSubmit: SubmitHandler<Inputs> = data => console.log(data);


  return (	
	<form onSubmit={handleSubmit(onSubmit)} className={style.addBlogpostForm}>
		<h2>Share the <span>magic</span> here</h2>

		<label htmlFor='title'>Title</label>
		<input id='title' placeholder='Enter a catchy blog title...' {...register("title", { required: true })} />
		{errors.title && <span>This field is required</span>}

		<label htmlFor='author'>Author</label>
		<input id='author' placeholder='Your name or pen name' {...register("author", { required: true })} />
		{errors.author && <span>This field is required</span>}

		<label htmlFor='content'>Content</label>
		{/* React-Quill in TextEditor, wrapped in Controller to handle text-editing */}
		<Controller 
			name="content"
			control={control}
			rules={{required: true}}
			render={({field})=> (
				<TextEditor value={field.value} onChange={field.onChange} placeholderText="Blog away!"/>
			)}
		/>
		{errors.content && <span>This field is required</span>}

		<label htmlFor='tags'>Tags</label>
		<input id='tags' placeholder='Add tags separated by commas' {...register("tags")} />
		{errors.tags && <span>This field is required</span>}

		<button className={style.blogFormSubmitButton} type="submit">Submit new post</button>
	</form>	
  )
}

export default AddBlogpostForm