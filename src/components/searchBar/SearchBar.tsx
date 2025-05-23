import React from "react";
import style from "./SearchBar.module.css";
import { TfiSearch } from "react-icons/tfi";
import { X as Close } from "react-feather";
import { useLocation } from "react-router-dom";

type SearchBarProps = {
	searchInput: string;
	setSearchInput: React.Dispatch<React.SetStateAction<string>>;
	numberOfReults: number;
};

// Component for bloglist search, including list heading
const SearchBar = ({
	searchInput,
	setSearchInput,
	numberOfReults,
}: SearchBarProps) => {
	const inputRef = React.useRef<HTMLInputElement>(null);
	const location = useLocation();

	const isMyPosts = location.pathname === "/blogs/my-posts";

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value.toLowerCase();
		setSearchInput(value);
	};

	return (
		<>
			<div className={style.searchBar}>
				{/* Display "My posts..." heading if url is blogs/my-posts */}
				{isMyPosts ? (
					<h2>My Blogposts - {numberOfReults} result{numberOfReults > 1 && "s"}</h2>  // Pluralize result if needed
				) : (
					<h2>{numberOfReults} Blogpost{numberOfReults > 1 && "s"} </h2> // Pluralize result if needed
				)}

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
