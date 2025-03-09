import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import style from './AddBlogpostForm.module.css';

type Inputs = {
	  title: string;
	  author: string;	  
	  content: string;
	  tags: string;	  
};


const AddBlogpostForm = () => {
	const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
	const onSubmit: SubmitHandler<Inputs> = data => console.log(data);


  return (	
	<form onSubmit={handleSubmit(onSubmit)} className={style.addBlogpostForm}>
		<label htmlFor='title'>Title</label>
		<input id='title' {...register("title", { required: true })} />
		{errors.title && <span>This field is required</span>}

		<label htmlFor='author'>Author</label>
		<input id='author' {...register("author", { required: true })} />
		{errors.author && <span>This field is required</span>}

		<label htmlFor='content'>Content</label>
		<textarea id='content' {...register("content", { required: true })} />
		{errors.content && <span>This field is required</span>}

		<label htmlFor='tags'>Tags</label>
		<input id='tags' {...register("tags")} />
		{errors.tags && <span>This field is required</span>}

		<button type="submit">Submit new post</button>
	</form>	
  )
}

export default AddBlogpostForm