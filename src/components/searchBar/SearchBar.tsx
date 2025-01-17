import React from "react";
import style from "./SearchBar.module.css";
import { TfiSearch } from "react-icons/tfi";

type SearchBarProps = {
	setBlogList: () => void;
};

const SearchBar = ({ setBlogList }: SearchBarProps) => {
	let numberOfSearchResults = 666;
	// Search logic goes here

	return (
		<>
			<div className={style.searchBar}>
				<p>{numberOfSearchResults}</p>

				<div className={style.searchFieldWrapper}>
					<button onClick={setBlogList}>
						<TfiSearch />
					</button>
					<input type="text" placeholder="Search blogs..." />
				</div>				
			</div>
		</>
	);
};

export default SearchBar;
