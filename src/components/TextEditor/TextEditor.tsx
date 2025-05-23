import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import style from "./TextEditor.module.css";

type TextEditorPropsType = {
	value: string;
	onChange: (value: string) => void;
	placeholderText: string;
};

const TextEditor = ({
	value,
	onChange,
	placeholderText,
}: TextEditorPropsType) => {
  
  // Customize editor toolbar
	const modules = {
		toolbar: [
			[{ header: [2, 3, 4, false] }], // Only h2, h3, and normal text
			["bold", "italic", "underline"],
			[{ list: "ordered" }, { list: "bullet" }],
			["link"],
			["clean"],
		],
	};

	const formats = [
		"header",
		"bold",
		"italic",
		"underline",
		"list",
		"bullet",
		"link",
    "clean",
	];

	return (
		<div className={style.textEditor}>
			<ReactQuill
				theme="snow"
				value={value}
				onChange={onChange}
				placeholder={placeholderText}
        modules={modules}
        formats={formats}
			/>
		</div>
	);
};

export default TextEditor;
