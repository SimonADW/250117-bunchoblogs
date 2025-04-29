import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import style from './TextEditor.module.css'

type TextEditorPropsType = {
  value: string;
  onChange: (value: string) => void;
  placeholderText: string;
};

const TextEditor = ({value, onChange, placeholderText}: TextEditorPropsType) => {

  return (
	<div className={style.textEditor}>
		<ReactQuill
        theme="snow"
        value={value}
        onChange={onChange}
        placeholder={placeholderText}
      />
	</div>
  )
}

export default TextEditor