import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import style from './TextEditor.module.css'

const TextEditor = () => {
	const [content, setContent] = useState('')

  return (
	<div className={style.textEditor}>
		<ReactQuill
        theme="snow"
        value={content}
        onChange={setContent}
        placeholder="Blog away!"
      />
	</div>
  )
}

export default TextEditor