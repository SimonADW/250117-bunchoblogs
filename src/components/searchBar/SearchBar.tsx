import React from "react";
import style from "./SearchBar.module.css";
import { TfiSearch } from "react-icons/tfi";
import { X as Close } from "react-feather";

type SearchBarProps = {
	searchInput: string;
	setSearchInput: React.Dispatch<React.SetStateAction<string>>;
	numberOfReults: number;
};

const SearchBar = ({
	searchInput,
	setSearchInput,
	numberOfReults,
}: SearchBarProps) => {
	const inputRef = React.useRef<HTMLInputElement>(null);
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value.toLowerCase();
		setSearchInput(value);
	};

	return (
		<>
			<div className={style.searchBar}>
				<p>{numberOfReults} Blogs</p>

				<div className={style.searchFieldWrapper}>
					<TfiSearch />
					<input
						name="search-field"
						type="text"
						placeholder="Search blogs..."
						onChange={handleChange}
						value={searchInput}
						ref={inputRef}
					/>
					<button
						aria-roledescription="clear search field"
						className={style.clearSearchButton}
						onClick={() => {
							setSearchInput("");
							inputRef.current!.focus();
						}}
					>
						<Close size={16} />
					</button>
				</div>
			</div>
		</>
	);
};

export default React.memo(SearchBar);
