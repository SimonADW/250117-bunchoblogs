import React, { useState } from "react";
import style from "./SearchBar.module.css";
import { TfiSearch } from "react-icons/tfi";
import { BlogPost } from "../../types/types";

type SearchBarProps = {
	blogPosts: BlogPost[];
	searchInput: string;
	setSearchInput: React.Dispatch<React.SetStateAction<string>>;
	numberOfReults: number;
};

const SearchBar = ({ blogPosts, searchInput, setSearchInput, numberOfReults }: SearchBarProps) => {	

	// const handleSearch = () => {
	// 	const filteredPosts = blogPosts.filter(post => post.title.includes(searchInput));
	// 	setBlogPosts(filteredPosts);
	// };
	console.log("Blogposts from SearchBar: ", blogPosts);
	

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value.toLowerCase();
		setSearchInput(value);
	  };

	console.log("SearchBar rendered: ", searchInput);

	return (
		<>
			<div className={style.searchBar}>
				<p>{numberOfReults}</p>

				<div className={style.searchFieldWrapper}>
					<button>
						<TfiSearch />
					</button>
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

export default SearchBar;
