import React from "react";
import style from "./SearchBar.module.css";
import { TfiSearch } from "react-icons/tfi";

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
						type="text"
						placeholder="Search blogs..."
						onChange={handleChange}
						value={searchInput}
					/>
				</div>
			</div>
		</>
	);
};

export default React.memo(SearchBar);
